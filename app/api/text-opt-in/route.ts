import { NextResponse } from "next/server";

type ListSelection = "bagged-pickup" | "feed-delivery" | "both";

type TextOptInRequest = {
  name: string;
  phone: string;
  listSelection: ListSelection;
  consent: boolean;
};

const LIST_ENV_BY_SELECTION: Record<Exclude<ListSelection, "both">, string> = {
  "bagged-pickup": "CLICKSEND_BAGGED_PICKUP_LIST_ID",
  "feed-delivery": "CLICKSEND_FEED_DELIVERY_LIST_ID",
};

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizePhone(value: string) {
  const digits = value.replace(/\D/g, "");

  if (digits.length === 10) {
    return `+1${digits}`;
  }

  if (digits.length === 11 && digits.startsWith("1")) {
    return `+${digits}`;
  }

  if (value.startsWith("+") && digits.length >= 10 && digits.length <= 15) {
    return `+${digits}`;
  }

  return "";
}

function parsePayload(body: unknown): TextOptInRequest | null {
  if (!body || typeof body !== "object") {
    return null;
  }

  const record = body as Record<string, unknown>;
  const name = normalizeText(record.name);
  const phone = normalizePhone(normalizeText(record.phone));
  const listSelection = normalizeText(record.listSelection) as ListSelection;
  const consent = record.consent === true;

  if (!name || !phone || !consent) {
    return null;
  }

  if (!["bagged-pickup", "feed-delivery", "both"].includes(listSelection)) {
    return null;
  }

  return { name, phone, listSelection, consent };
}

function getListIds(selection: ListSelection) {
  const selected: Array<Exclude<ListSelection, "both">> =
    selection === "both" ? ["bagged-pickup", "feed-delivery"] : [selection];

  return selected.map((key) => process.env[LIST_ENV_BY_SELECTION[key]]).filter(Boolean) as string[];
}

async function addContactToList(input: TextOptInRequest, listId: string) {
  const username = process.env.CLICKSEND_USERNAME;
  const apiKey = process.env.CLICKSEND_API_KEY;

  if (!username || !apiKey) {
    throw new Error("ClickSend credentials are not configured.");
  }

  const auth = Buffer.from(`${username}:${apiKey}`).toString("base64");
  const [firstName, ...lastNameParts] = input.name.split(/\s+/);

  const response = await fetch(`https://rest.clicksend.com/v3/lists/${listId}/contacts`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone_number: input.phone,
      first_name: firstName,
      last_name: lastNameParts.join(" "),
      custom_1: "Kesten Feed Co. website opt-in",
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("ClickSend contact add failed", response.status, detail);
    throw new Error("ClickSend rejected the contact.");
  }
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Please complete the text list form." }, { status: 400 });
  }

  const payload = parsePayload(body);

  if (!payload) {
    return NextResponse.json(
      { message: "Please enter your name, a valid phone number, choose a list, and agree to texts." },
      { status: 400 },
    );
  }

  const listIds = getListIds(payload.listSelection);

  if (listIds.length === 0 || !process.env.CLICKSEND_USERNAME || !process.env.CLICKSEND_API_KEY) {
    return NextResponse.json(
      { message: "The text list is not fully connected yet. Please email Remi for now." },
      { status: 503 },
    );
  }

  try {
    await Promise.all(listIds.map((listId) => addContactToList(payload, listId)));

    return NextResponse.json({
      message: "You're on the list. We'll send the important feed updates.",
    });
  } catch (error) {
    console.error("Text opt-in failed", error);
    return NextResponse.json(
      { message: "Unable to join the text list right now. Please email Remi for now." },
      { status: 502 },
    );
  }
}
