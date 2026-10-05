import {
    Image,
    Pressable,
    Text,
    View,
} from "react-native";

import { Minus, Plus } from "lucide-react-native";

import type { CartItem } from "@/types/cart";

type Props = {
    item: CartItem;
    onIncrease: () => void;
    onDecrease: () => void;
};

export const CartItemCard = ({ item, onIncrease, onDecrease, }: Props) => {
    const subtotal = item.product.price * item.quantity;

    return (
        <View className="mb-4 flex-row items-star rounded-2xl bg-[#E8EEF5] p-3">
            <Image
                source={item.product.image}
                style={{ width: 90, height: 90 }}
                className="rounded-xl"
                resizeMode="cover"
            />

            <View className="ml-3 flex-1">
                <Text className="text-base font-bold text-[#102A43]">
                    {item.product.name}
                </Text>

                <Text className="mt-1 text-sm text-[#64748B]">
                    R$ {item.product.price.toFixed(2)} cada
                </Text>

                <Text className="mt-2 text-base font-bold text-[#102A43]">
                    Subtotal: R$ {subtotal.toFixed(2)}
                </Text>
            </View>
            
            <View className="mt-3 flex-row items-center">
                <Pressable
                    onPress={onDecrease}
                    className="h-8 w-8 items-center justify-center rounded-full bg-white"
                >
                    <Minus size={16} color="#102A43" />
                </Pressable>

                <Text className="mx-3 text-base font-bold text-[#102A43]">
                    {item.quantity}
                </Text>

                <Pressable
                    onPress={onIncrease}
                    className="h-8 w-8 items-center justify-center rounded-full bg-[#102A43]"
                >
                    <Plus size={16} color="#FFFFFF" />
                </Pressable>
            </View>


        </View>
        
    );
};