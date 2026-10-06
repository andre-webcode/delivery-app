import { CartItem } from "@/types/cart";

export const calculateSubtotal = (price: number, quantity: number) => {
    return price * quantity;
}

export const calculateCartTotal = (cart: CartItem[]) => {
    return cart.reduce((total, item) => {

        return total + calculateSubtotal(item.product.price, item.quantity)

    }, 0)
}


export const calculateCartItemCount = (cart: CartItem[]): number => {
    return cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0)
}