import { Header } from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "@/components/SearchBar";
import { CategoryItem } from "@/components/CategoryItem";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { CupSoda, Fish, IceCreamBowl, Pizza, Sandwich, Utensils } from "lucide-react-native";
import { RestaurantCard } from "@/components/RestaurantCard";
import { restaurants } from "@/data/restaurants";
import { useRouter } from "expo-router";


export default function Home() {
	const router = useRouter();


	const handleRestaurantPress = (id: number) => {
		router.push({
			pathname: "/restaurant/[id]",
			params: {
				id: id.toString(),
			}
		})
	}



	return (
		<SafeAreaView className="flex-1 bg-[#F8FAFC]">
			<ScrollView showsVerticalScrollIndicator={false}>

				<Header />
				<SearchBar />

			
				<View className="mx-5 mt-6 overflow-hidden rounded-3xl bg-[#102A43]">
					<View className="h-48 flex-row items-center px-4 py-3">
						
						<View className="z-10 flex-1 pr-1">
							<Text className="self-start rounded-full bg-[#FDE68A] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#102A43]">
								Oferta especial
							</Text>

							<Text className="mt-3 text-xl font-extrabold leading-6 text-white">
								Seu pedido favorito, na sua porta!
							</Text>

							<Text className="mt-2 text-sm leading-5 text-[#D9E8F5]">
								Peça seus favoritos e receba com praticidade.
							</Text>
						</View>

						
						<Image
							source={require("../../../assets/delivery.jpg")}
							resizeMode="contain"
							style={{
								width: 135,
								height: 155,
							}}
						/>
					</View>
				</View>

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
									id={item.id}
									name={item.name}
									rating={item.rating}
									deliveryTime={item.deliveryTime}
									category={item.category}
									image={item.image}
									onPress={() => handleRestaurantPress(item.id)}

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