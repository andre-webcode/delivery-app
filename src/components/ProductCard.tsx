import { Image, ImageSourcePropType, Text, View } from "react-native"

type Props = {
    name: string;
    description: string;
    price: number;
    image: ImageSourcePropType;

}
export const ProductCard = ({ name, description, price, image }: Props) => {
    return (
        <View className="flex-row mb-4 rounded-2xl bg-[#E8EEF5] p-3">

            < Image
                source={image}
                style={{ width: 110, height: 96 }}
                 resizeMode="cover"
                 className="rounded-xl"
                
            />

            <View className="flex-1 ml-3 justify-between">
                <Text className="text-base font-bold text-[#102A43]">{name}</Text>
                <Text className="mt-1 text-sm leading-5 text-[#64748B]">{description}</Text>
                <Text className="mt-2 text-base font-bold text-[#102A43]">R$  {price.toFixed(2).replace(".", ",")}</Text>
            </View>



        </View >
    )
}