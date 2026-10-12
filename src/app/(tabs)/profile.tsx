import { MapPin, UserRound } from "lucide-react-native";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  return (
    <SafeAreaView className="flex-1 bg-[#F8FAFC]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-5 pb-8"
      >
        {/* Cabeçalho */}
        <View className="pb-6 pt-4">
          <Text className="text-2xl font-extrabold text-[#102A43]">
            Meu perfil
          </Text>

          <Text className="mt-1 text-sm text-[#64748B]">
            Suas informações e preferências
          </Text>
        </View>

        {/* Cartão do usuário */}
        <View className="flex-row items-center rounded-3xl bg-[#102A43] p-5">
          <View className="h-16 w-16 items-center justify-center rounded-full bg-[#FDE68A]">
            <UserRound size={30} color="#102A43" />
          </View>

          <View className="ml-4 flex-1">
            <Text className="text-xl font-bold text-white">
              André
            </Text>

            <Text className="mt-1 text-sm text-[#D9E8F5]">
              Cliente do Delivery App
            </Text>
          </View>
        </View>

        {/* Informações da conta */}
        <View className="mt-7">
          <Text className="mb-3 text-lg font-bold text-[#102A43]">
            Dados da conta
          </Text>

          <View className="gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-5">
            <View>
              <Text className="text-xs font-medium text-[#64748B]">
                Nome
              </Text>

              <Text className="mt-1 text-base font-semibold text-[#102A43]">
                André
              </Text>
            </View>

            <View className="h-px bg-[#E2E8F0]" />

            <View>
              <Text className="text-xs font-medium text-[#64748B]">
                Tipo de conta
              </Text>

              <Text className="mt-1 text-base font-semibold text-[#102A43]">
                Demonstração
              </Text>
            </View>
          </View>
        </View>

        {/* Endereço de entrega */}
        <View className="mt-6">
          <Text className="mb-3 text-lg font-bold text-[#102A43]">
            Endereço de entrega
          </Text>

          <View className="flex-row items-center rounded-2xl border border-[#E2E8F0] bg-white p-4">
            <View className="h-12 w-12 items-center justify-center rounded-xl bg-[#E8EEF5]">
              <MapPin size={24} color="#102A43" />
            </View>

            <View className="ml-3 flex-1">
              <Text className="font-semibold text-[#102A43]">
                Nenhum endereço cadastrado
              </Text>

              <Text className="mt-1 text-sm text-[#64748B]">
                O endereço poderá ser definido em uma próxima etapa.
              </Text>
            </View>
          </View>
        </View>

        {/* Sobre o aplicativo */}
        <View className="mt-6 rounded-2xl bg-[#E8EEF5] p-4">
          <Text className="font-bold text-[#102A43]">
            Sobre o aplicativo
          </Text>

          <Text className="mt-2 text-sm leading-5 text-[#486581]">
            Este é um projeto de delivery com pedidos e entregas simulados.
            As informações do perfil são demonstrativas.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}