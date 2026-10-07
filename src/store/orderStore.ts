import { create } from "zustand";

import type { Order, OrderStatus, PaymentMethod } from "@/types/order";
import type { CartItem } from "@/types/cart";

type OrderStore = {
  order: Order | null;

  createOrder: (
    items: CartItem[],
    total: number,
    paymentMethod: PaymentMethod,
    address: string
  ) => void;
  updateOrderStatus: (status: OrderStatus) => void;
};

export const useOrderStore = create<OrderStore>((set) => ({
  order: null,

  createOrder: (items, total, paymentMethod, address) => {
    const newOrder: Order = {
      id: Date.now(),
      items,
      total,
      paymentMethod,
      address,
      status: "preparing",
    };

    set({
      order: newOrder,
    });
  },

  updateOrderStatus: (status) => {
    set((state) => ({
      order: state.order ? { ...state.order, status, } : null,
    }));
  },

}));