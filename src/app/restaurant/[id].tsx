import { restaurants } from "@/data/restaurants";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft, Star } from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";

export default function Restaurant() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const router = useRouter();

    const restaurant = restaurants.find((item) => item.id === parseInt(id))

    if (!restaurant) {
        return (
            <View className="flex-1 items-center justify-center">
                <Text  className="text-base text-[#64748B]">Restaurante não encontrado.</Text>
            </View>
        )
    }


    return (
        <View className="flex-1 bg-[#f8fafc]">
            <View className="relative">
                <Image
                    source={restaurant.image}
                    style={{ width: "100%", height: 220 }}
                    resizeMode="cover"
                />

                <Pressable
                    onPress={() => router.back()}
                    className="absolute left-4 top-4 rounded-full bg-white p-2"
                >
                    <ArrowLeft size={20} color="#102A43" />
                </Pressable>

            </View>

            <View className="items-center p-5">

                <Text className="text-2xl font-bold text-[#102A43]">{restaurant.name}</Text>

                <View className="flex-row items-center gap-1">
                    <Star
                        size={16}
                        color="#FBBF24"
                        fill="#FBBF24"
                    />

                    <Text className="text-base text-[#102A43]">
                        {restaurant.rating}
                    </Text>
                    <Text className="text-sm text-[#94A3B8]">
                        •
                    </Text>

                    <Text className="text-sm text-[#64748B]">
                        {restaurant.deliveryTime} min
                    </Text>
                </View>

                <Text className="mt-1 text-sm text-[#64748B]">{restaurant.category}</Text>
            </View>
        </View>

    )
}