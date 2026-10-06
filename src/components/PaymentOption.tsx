import { Pressable, Text } from "react-native";

type PaymentOptionProps = {
    label: string;
    selected: boolean;
    onPress: () => void;
};

export const PaymentOption = ({ label, selected, onPress }: PaymentOptionProps) => {
    return (
        <Pressable onPress={onPress}
            className={selected
                ? "mt-3 rounded-2xl bg-[#102A43] p-4"
                : "mt-3 rounded-2xl bg-[#E8EEF5] p-4"}
        >

            <Text className={
                selected
                    ? "text-base font-bold text-white"
                    : "text-base font-bold text-[#102A43]"
            }>
                {label}
            </Text>
        </Pressable>
    )
}