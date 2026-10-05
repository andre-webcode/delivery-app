import { CartItem } from "@/types/cart"
import { Product } from "@/types/product";
import { create } from "zustand";

type CartStore = {
    cart: CartItem[];
    addToCart: (product: Product) => void;
}
export const useCartStore = create<CartStore>((set) => ({
    cart: [],

    addToCart: (product) => {
        set((state) => {
            const existingItem = state.cart.find(
                (item) => item.product.id === product.id
            );

            if (existingItem) {
                return {
                    cart: state.cart.map((item) =>
                        item.product.id === product.id
                            ? {
                                ...item,
                                quantity: item.quantity + 1,
                            }
                            : item
                    ),
                };
            }

            return {
                cart: [
                    ...state.cart,
                    {
                        product,
                        quantity: 1,
                    },
                ],
            };
        });
    }
}))