import { Search } from "lucide-react-native"
import { TextInput, View } from "react-native"

type Props = {
    value?: string;
    onChangeText?: (text: string) => void;
};
export const SearchBar = ({ value, onChangeText }: Props) => {
    return (
        <View className="mx-5 mt-5 h-12 flex-row items-center gap-3 rounded-2xl bg-[#E8EEF5] px-4">
            <Search size={20} color="#64748B" />
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder="O que você está procurando?"
                className="flex-1 text-base text-[#102A43]"
                placeholderTextColor="#64748B"
            />
        </View>
    )
}