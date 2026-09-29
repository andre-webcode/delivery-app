import { Header } from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "@/components/SearchBar";
import { CategoryItem } from "@/components/CategoryItem";
import { ScrollView, Text, View } from "react-native";
import { CupSoda, Fish, IceCreamBowl, Pizza, Sandwich, Utensils } from "lucide-react-native";
export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-[#F8FAFC]">
      <Header />
      <SearchBar />

      <View className="mt-6 px-5">
        <Text className="mb-4 text-lg font-bold text-[#102A43]">
          Categorias
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View className="flex-row gap-5 px-5">
            <CategoryItem icon={Sandwich} name="Lanches" />
            <CategoryItem icon={Pizza} name="Pizza" />
            <CategoryItem icon={Utensils} name="Fritas" />
            <CategoryItem icon={CupSoda} name="Bebidas" />
            <CategoryItem icon={IceCreamBowl} name="Sobremesas" />
            <CategoryItem icon={Fish} name="Sushi" />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}