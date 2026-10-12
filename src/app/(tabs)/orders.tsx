import { useRouter } from "expo-router";
import { ArrowRight, Clock3, PackageCheck } from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Orders() {
  const router = useRouter();

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

      
        <View className="rounded-3xl border border-[#E2E8F0] bg-white p-5">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              <View className="h-11 w-11 items-center justify-center rounded-xl bg-[#E8EEF5]">
                <PackageCheck size={23} color="#102A43" />
              </View>

              <View>
                <Text className="text-base font-bold text-[#102A43]">
                  Pedido #1001
                </Text>

                <Text className="mt-1 text-xs text-[#64748B]">
                  Pedido demonstrativo
                </Text>
              </View>
            </View>

            <View className="rounded-full bg-[#FEF3C7] px-3 py-1">
              <Text className="text-xs font-bold text-[#92400E]">
                Em andamento
              </Text>
            </View>
          </View>

          <View className="my-5 h-px bg-[#E2E8F0]" />

          <View className="flex-row items-center gap-2">
            <Clock3 size={18} color="#64748B" />

            <Text className="flex-1 text-sm text-[#64748B]">
              Acompanhe o andamento da entrega
            </Text>
          </View>

          <Pressable
            onPress={handleTrackOrder}
            className="mt-5 flex-row items-center justify-center gap-2 rounded-xl bg-[#102A43] px-4 py-4"
          >
            <Text className="font-bold text-white">
              Acompanhar pedido
            </Text>

            <ArrowRight size={18} color="#FFFFFF" />
          </Pressable>
        </View>

       
        <View className="mt-5 rounded-2xl bg-[#E8EEF5] p-4">
          <Text className="font-bold text-[#102A43]">
            Seus pedidos
          </Text>

          <Text className="mt-2 text-sm leading-5 text-[#486581]">
            Esta tela contém um pedido de exemplo. O histórico real será
            conectado quando implementarmos o registro e o armazenamento
            dos pedidos.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}