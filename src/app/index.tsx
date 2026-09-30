import { Header } from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "@/components/SearchBar";
import { CategoryItem } from "@/components/CategoryItem";
import { FlatList, ScrollView, Text, View } from "react-native";
import { CupSoda, Fish, IceCreamBowl, Pizza, Sandwich, Utensils } from "lucide-react-native";
import { RestaurantCard } from "@/components/RestaurantCard";
import { restaurants } from "@/data/restaurants";


export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-[#F8FAFC]">
      <ScrollView showsVerticalScrollIndicator={false}>
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

        <View className="my-6 items-center px-5">

          <Text className="mb-4 self-start text-lg font-bold text-[#102A43]">
            Restaurantes
          </Text>

          <FlatList
            data={restaurants}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            className="w-full"
            renderItem={({ item }) => (

              <View className="mr-5">
                <RestaurantCard
                  name={item.name}
                  rating={item.rating}
                  deliveryTime={item.deliveryTime}
                  category={item.category}
                  image={item.image}

                />

              </View>
            )}
            horizontal
          />

        </View>

      </ScrollView>
    </SafeAreaView >

  )
}