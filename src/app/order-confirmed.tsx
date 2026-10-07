import { useOrderStore } from "@/store/orderStore";
import { OrderStatus } from "@/types/order";
import { getStatusLabel } from "@/utils/order";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function OrderConfirmed() {
  const order = useOrderStore((state) => state.order);


  const handleTrackOrder = () => {
    router.push("/order-tracking");
  };

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

      <Text className="mt-4 text-base font-bold text-[#102A43]">
        {getStatusLabel(order?.status ?? "preparing")}
      </Text>

      <Pressable
        onPress={handleTrackOrder}
        className="mt-10 rounded-2xl bg-[#102A43] py-4 px-5"
      >
        <Text className="text-center text-base font-bold text-white">
          Acompanhar pedido
        </Text>
      </Pressable>
    </View>
  );
}