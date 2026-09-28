import { Text, View } from "react-native"
import { MapPin, User } from "lucide-react-native";

export const Header = () => {
    return (
        <View className="px-5 ">
            <View className="flex-row items-center justify-between pt-3">

                <View className="flex-row items-center gap-2">
                    <MapPin size={20} color="#102A43"/>

                    <View>
                        <Text className="text-xs text-[#64748B]">
                            Entregar em
                        </Text>
                        
                        <Text className="text-sm font-semibold text-[#102A43]">
                            Minha localização
                        </Text>

                    </View>

                </View>

                <View className="w-10 h-10  rounded-full bg-[#E8EEF5] items-center justify-center">
                    <User size={22}  color="#102A43" />
                </View>
            </View>

            <View className="mt-5">
                <Text className="text-2xl font-bold text-[#102A43]">Olá André! </Text>
            </View>
        </View>

    )
}