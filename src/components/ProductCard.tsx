import { Plus } from "lucide-react-native";
import { Image, ImageSourcePropType, Pressable, Text, View } from "react-native"

type Props = {
    name: string;
    description: string;
    price: number;
    image: ImageSourcePropType;
    onAddToCart: () => void;

}
export const ProductCard = ({ name, description, price, image, onAddToCart }: Props) => {
    return (
        <View className="flex-row mb-4 rounded-2xl bg-[#E8EEF5] p-3">

            < Image
                source={image}
                style={{ width: 110, height: 96 }}
                resizeMode="cover"
                className="rounded-xl"

            />

            <View className="ml-3 flex-1">

                <View className="flex-row items-center justify-between">
                    <Text className="text-base font-bold text-[#102A43]">{name}</Text>


                    <Pressable
                        onPress={onAddToCart}
                        className="h-9 w-9 items-center justify-center rounded-full bg-[#102A43] p-2"
                    >
                        <Plus size={18} color="#FFFFFF" />
                    </Pressable>
                </View>

                <Text className="mt-1 text-sm leading-5 text-[#64748B]">{description}</Text>
                <Text className="mt-2 text-base font-bold text-[#102A43]">R$  {price.toFixed(2).replace(".", ",")}</Text>


            </View>
        </View >
    )
}