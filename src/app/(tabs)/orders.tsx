import { useOrderStore } from "@/store/orderStore";
import { getStatusLabel } from "@/utils/order";
import { useRouter } from "expo-router";
import { ArrowRight, Clock3, PackageCheck } from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Orders() {
    const router = useRouter();
    const order = useOrderStore((state) => state.order);

    const handleTrackOrder = () => {
        router.push("/order-tracking");
    };

    return (
        <SafeAreaView className="flex-1 bg-[#F8FAFC]">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerClassName="px-5 pb-8"
            >

                <View className="pb-6 pt-4">
                    <Text className="text-2xl font-extrabold text-[#102A43]">
                        Meus pedidos
                    </Text>

                    <Text className="mt-1 text-sm text-[#64748B]">
                        Acompanhe suas compras e entregas
                    </Text>
                </View>


                {order ? (
                    <View className="rounded-3xl border border-[#E2E8F0] bg-white p-5">
                        <Text className="text-lg font-bold text-[#102A43]">
                            Pedido #{order.id}
                        </Text>

                        <Text className="mt-3 text-sm text-[#64748B]">
                            {getStatusLabel(order.status)}
                        </Text>

                        <View className="my-4 h-px bg-[#E2E8F0]" />

                        <Text className="text-sm text-[#64748B]">
                            Itens: {order.items.length}
                        </Text>

                        <Text className="mt-2 text-base font-bold text-[#102A43]">
                            Total: R$ {order.total.toFixed(2).replace(".", ",")}
                        </Text>

                        <Pressable
                            onPress={handleTrackOrder}
                            className="mt-5 items-center rounded-xl bg-[#102A43] px-4 py-4"
                        >
                            <Text className="font-bold text-white">
                                Acompanhar pedido
                            </Text>
                        </Pressable>
                    </View>
                ) : (
                    <View className="items-center rounded-3xl border border-[#E2E8F0] bg-white p-6">
                        <PackageCheck size={40} color="#64748B" />

                        <Text className="mt-4 text-lg font-bold text-[#102A43]">
                            Você ainda não tem pedidos
                        </Text>

                        <Text className="mt-2 text-center text-sm leading-5 text-[#64748B]">
                            Quando você concluir um pedido, ele aparecerá aqui para acompanhamento.
                        </Text>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}