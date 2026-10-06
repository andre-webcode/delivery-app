import type { CartItem } from "./cart";

export type OrderStatus =
  | "preparing"
  | "on_the_way"
  | "delivered";

export type PaymentMethod =
  | "pix"
  | "credit"
  | "cash";

export type Order = {
  id: number;
  items: CartItem[];
  total: number;
  paymentMethod: PaymentMethod;
  address: string;
  status: OrderStatus;
};