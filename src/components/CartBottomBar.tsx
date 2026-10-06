import { ShoppingCart } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

type Props = {
    itemCount: number;
    total: number;
    onPress: () => void;
};

export const CartBottomBar = ({ itemCount, total, onPress, }: Props) => {
    return (
        <Pressable
            onPress={onPress}
            className="absolute bottom-5 left-5 right-5 flex-row items-center rounded-2xl bg-[#102A43] px-4 py-3"
        >
            <ShoppingCart size={22} color="#FFFFFF" />

            <View className="ml-3 flex-1">
                <Text className="text-sm text-white">
                    {itemCount} {itemCount === 1 ? "item" : "itens"}
                </Text>

                <Text className="text-base font-bold text-white">
                    R$ {total.toFixed(2)}
                </Text>
            </View>

            <Text className="text-base font-bold text-white">
                Ver carrinho
            </Text>
        </Pressable>
    );
};