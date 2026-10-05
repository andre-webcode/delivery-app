import { CartItemCard } from "@/components/cartItemCard";
import { useCartStore } from "@/store/cartStore";
import { View, Text, FlatList } from "react-native";

export default function Cart() {
    const cart = useCartStore((state) => state.cart);
    const increaseQuantity = useCartStore((state) => state.increaseQuantity);
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);


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
                    onIncrease={()=>increaseQuantity(item.product.id)}
                    onDecrease={()=>decreaseQuantity(item.product.id)}
                    />
                )

                }



            />
        </View>
    );
}