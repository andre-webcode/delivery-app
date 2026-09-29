import { Header } from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "@/components/SearchBar";
import { CategoryItem } from "@/components/CategoryItem";
import { ScrollView, Text, View } from "react-native";
import { CupSoda, Fish, IceCreamBowl, Pizza, Sandwich, Utensils } from "lucide-react-native";
import { RestaurantCard } from "@/components/RestaurantCard";
export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-[#F8FAFC]">
      <ScrollView  showsVerticalScrollIndicator={false}>
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

        <View className="mt-6 items-center px-5">

          <Text className="mb-4 self-start text-lg font-bold text-[#102A43]">
            Restaurantes
          </Text>

          <View className="gap-5">
            <RestaurantCard
              name="Burger House"
              rating={4.8}
              deliveryTime={30}
              category="Hamburguer"
              image={require("../../assets/restaurantes/burguer.jpg")}
            />
            <RestaurantCard
              name="Pizza Prime"
              rating={4.6}
              deliveryTime={40}
              category="Pizza"
              image={require("../../assets/restaurantes/pizza.jpg")}
            />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView >

  )
}