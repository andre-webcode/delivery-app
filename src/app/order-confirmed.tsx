import { useOrderStore } from "@/store/orderStore";
import { Text, View } from "react-native";

export default function OrderConfirmed() {
  const order = useOrderStore((state) => state.order);


  return (
    <View className="flex-1 items-center justify-center bg-[#F8FAFC] px-5">
      <Text className="text-3xl font-bold text-[#102A43]">
        Pedido confirmado!
      </Text>

      <Text className="mt-3 text-base text-[#64748B]">
        Pedido #{order?.id}
      </Text>

      <Text className="mt-3 text-center text-base text-[#102A43]">
       Total: R$ {order?.total.toFixed(2)}
      </Text>
    </View>
  );
}