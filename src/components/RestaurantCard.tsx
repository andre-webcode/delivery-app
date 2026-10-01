import { Star } from "lucide-react-native"
import { Image, ImageSourcePropType, Pressable, Text, View } from "react-native"

type Props = {
    id: number;
    name: string;
    rating: number;
    deliveryTime: number;
    category: string;
    image: ImageSourcePropType;
    onPress: () => void;
}
export const RestaurantCard = ({id, name, rating, deliveryTime, category, image, onPress }: Props) => {
    return (
        <Pressable
            onPress={onPress}
            className="w-72 overflow-hidden rounded-2xl bg-[#E8EEF5]">


            <Image
                source={image}
                style={{ width: "100%", height: 144 }}
                resizeMode="cover"
            />


            <View className="items-center p-4">
                <Text className="text-lg font-bold text-[#102A43]">
                    {name}
                </Text>

                <View className="mt-2 flex-row items-center gap-3">

                    <View className="flex-row items-center gap-1">
                        <Star size={16} color="#FBBF24" fill="#FBBF24" />
                        <Text className="text-sm text-[#102A43]">{rating}</Text>
                    </View>

                    <Text className="text-sm text-[#64748B]">
                        •
                    </Text>

                    <Text className="text-sm text-[#64748B]">
                        {deliveryTime} min
                    </Text>

                </View>

                <Text className="mt-1 text-sm text-[#64748B]">
                    {category}
                </Text>
            </View>
        </Pressable>
    )
}