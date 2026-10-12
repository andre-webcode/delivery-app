import { LucideIcon } from "lucide-react-native";
import { Image, ImageSourcePropType, Pressable, Text, View } from "react-native"

type Props = {
    icon: LucideIcon;
    name: string;
    onPress?: (name: string) => void;
    isSelected?: boolean;
}
export const CategoryItem = ({ icon: Icon, name, onPress, isSelected = false, }: Props) => {


    const handlePress = () => {
        onPress?.(name);
    }



    return (
        <Pressable onPress={handlePress} className="items-center">
            <View className={`h-14 w-14 items-center justify-center overflow-hidden rounded-full
                ${isSelected ? "bg-[#102A43]" : "bg-[#E8EEF5]"}`}>

                <Icon size={24} color={isSelected ? "#FFFFFF" : "#102A43"} />

            </View>

            <Text className={`mt-2 text-sm font-semibold ${isSelected ? "text-[#2563EB]" : "text-[#102A43]"
                }`}>
                {name}
            </Text>
        </Pressable >
    )
}