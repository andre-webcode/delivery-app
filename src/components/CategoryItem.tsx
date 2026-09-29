import { LucideIcon } from "lucide-react-native";
import { Image, ImageSourcePropType, Text, View } from "react-native"

type Props = {
    icon: LucideIcon;
    name: string;
}
export const CategoryItem = ({ icon: Icon, name }: Props) => {
    return (
        <View className=" items-center">
            <View className="h-14 w-14  items-center justify-center overflow-hidden rounded-full bg-[#E8EEF5]">
                <Icon size={24} color="#102A43" />
            </View>

            <Text className="mt-2 text-sm font-semibold text-[#102A43]">
                {name}
            </Text>
        </View>
    )
}