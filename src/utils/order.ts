import type { OrderStatus } from "@/types/order";

export const getStatusLabel = (status: OrderStatus): string => {
  if (status === "preparing") {
    return "Preparando seu pedido";
  }

  if (status === "on_the_way") {
    return "Seu pedido está a caminho";
  }

  return "Pedido entregue";
};