export const CONTACT_EMAIL = "remi@kestenfeed.co";
export const CONTACT_PHONE = "660-971-0060";
export const CONTACT_PHONE_HREF = "tel:660-971-0060";
export const ORDER_PATH = "/order";

export const PICKUP_LOCATION = {
  name: "Branded Concrete",
  street: "26197 Ebenezer Rd",
  cityStateZip: "Concordia, MO 64020",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Branded%20Concrete%2026197%20Ebenezer%20Rd%20Concordia%20MO%2064020",
};

export const ORDER_WINDOW = {
  status: "open" as "open" | "upcoming" | "closed",
  nextPickup: "Friday, July 3, 2026",
  orderDeadline: "Friday, June 26, 2026 at 11:59 PM",
  orderingOpens: "",
};

export function getOrderWindowMessage() {
  if (ORDER_WINDOW.status === "open") {
    return `Ordering is now open! Build your pallet by ${ORDER_WINDOW.orderDeadline}.`;
  }

  if (ORDER_WINDOW.status === "upcoming") {
    return `Ordering opens ${ORDER_WINDOW.orderingOpens}. Join the text list so you don't miss it.`;
  }

  return `Thanks for your orders! We'll see you on pickup day, ${ORDER_WINDOW.nextPickup}.`;
}
