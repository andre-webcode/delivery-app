import { Text, View } from "react-native";

export default function OrderConfirmed() {
  return (
    <View className="flex-1 items-center justify-center bg-[#F8FAFC] px-5">
      <Text className="text-3xl font-bold text-[#102A43]">
        Pedido confirmado!
      </Text>

      <Text className="mt-3 text-center text-base text-[#64748B]">
        Seu pedido foi realizado com sucesso.
      </Text>
    </View>
  );
}