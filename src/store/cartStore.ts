import { CartItem } from "@/types/cart"
import { Product } from "@/types/product";
import { create } from "zustand";

type CartStore = {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    clearCart: () => void;
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
    },

    increaseQuantity: (productId) => {
        set((state) => ({
            cart: state.cart.map((item) =>
                item.product.id === productId
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item
            ),
        }));
    },

    decreaseQuantity: (productId) => {
        set((state) => {
            const existingItem = state.cart.find(
                (item) => item.product.id === productId
            );

            if (!existingItem) {
                return state;
            }

            if (existingItem.quantity === 1) {
                return {
                    cart: state.cart.filter(
                        (item) => item.product.id !== productId
                    ),
                };
            }

            return {
                cart: state.cart.map((item) =>
                    item.product.id === productId
                        ? {
                            ...item,
                            quantity: item.quantity - 1,
                        }
                        : item
                ),
            };
        });
    },

    clearCart: () => {
        set({
          cart: [],
        });
      },
}))