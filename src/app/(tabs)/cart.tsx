import { CartItemCard } from "@/components/cartItemCard";
import { useCartStore } from "@/store/cartStore";
import { calculateCartTotal } from "@/utils/cart";
import { router } from "expo-router";
import { View, Text, FlatList, Pressable } from "react-native";

export default function Cart() {
    const cart = useCartStore((state) => state.cart);
    const increaseQuantity = useCartStore((state) => state.increaseQuantity);
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
    const total = calculateCartTotal(cart);


    if (cart.length === 0) {
        return (
            <View className="flex-1 items-center justify-center bg-[#F8FAFC] px-5">
                <Text className="text-2xl font-bold text-[#102A43]">
                    Seu carrinho está vazio
                </Text>

                <Text className="mt-2 text-center text-[#64748B]">
                    Adicione produtos para fazer seu pedido.
                </Text>
            </View>
        );
    }

    const handleGoToCheckout = () => {
        router.push("/checkout");
    }

    return (
        <View className="flex-1 bg-[#F8FAFC]">
            <Text className="p-5 text-2xl font-bold text-[#102A43]">
                Meu Carrinho
            </Text>

            <FlatList
                data={cart}
                keyExtractor={(item) => item.product.id.toString()}
                renderItem={({ item }) => (
                    <CartItemCard
                        item={item}
                        onIncrease={() => increaseQuantity(item.product.id)}
                        onDecrease={() => decreaseQuantity(item.product.id)}
                    />
                )

                }

            />

            <View className="border-t border-gray-300 bg-white p-5 py-4">
                <View className="flex-row items-center justify-between">
                    <Text className="text-base text-[#64748B]">
                        Total do pedido
                    </Text>
                    <Text className="text-xl font-bold text-[#102A43]">
                        R${total.toFixed(2)}
                    </Text>
                </View>

                <Pressable
                    onPress={handleGoToCheckout}
                    className="mt-3 bg-[#102A43] rounded-xl py-4"
                >
                    <Text className="text-center text-base font-bold text-white">
                        Continuar para checkout
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}