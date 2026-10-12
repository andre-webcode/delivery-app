import { Header } from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "@/components/SearchBar";
import { CategoryItem } from "@/components/CategoryItem";
import { FlatList, Image, LayoutChangeEvent, Pressable, ScrollView, Text, View } from "react-native";
import { CupSoda, Fish, IceCreamBowl, Pizza, Sandwich, Utensils } from "lucide-react-native";
import { RestaurantCard } from "@/components/RestaurantCard";
import { restaurants } from "@/data/restaurants";
import { useRouter } from "expo-router";
import { useState } from "react";


export default function Home() {
	const router = useRouter();
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [searchText, setSearchText] = useState("");



	const handleRestaurantPress = (id: number) => {
		router.push({
			pathname: "/restaurant/[id]",
			params: {
				id: id.toString(),
			}
		})
	}

	const handleCategoryPress = (categoryName: string) => {
		if (selectedCategory === categoryName) {
			setSelectedCategory(null);
			return;
		}

		setSelectedCategory(categoryName);
	};

	const search = searchText.trim().toLowerCase();
	const filteredRestaurants = restaurants.filter((restaurant) => {
		const category =
			selectedCategory === "Lanches" ? "Hambúrguer" : selectedCategory;

		const matchesCategory =
			category === null || restaurant.category === category;

			const matchesSearch =
			`${restaurant.name} ${restaurant.category}`
			  .toLowerCase()
			  .includes(search);

			  return matchesCategory && matchesSearch;
	});


	return (
		<SafeAreaView className="flex-1 bg-[#F8FAFC]">
			<ScrollView showsVerticalScrollIndicator={false}>

				<Header />
				<SearchBar
					value={searchText}
					onChangeText={setSearchText}
				/>


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
							<CategoryItem icon={Sandwich} name="Lanches"
								onPress={handleCategoryPress}
								isSelected={selectedCategory === "Lanches"}
							/>

							<CategoryItem icon={Pizza} name="Pizza"
								onPress={handleCategoryPress}
								isSelected={selectedCategory === "Pizza"}
							/>

							<CategoryItem icon={Utensils} name="Fritas"
								onPress={handleCategoryPress}
								isSelected={selectedCategory === "Fritas"}
							/>

							<CategoryItem icon={CupSoda} name="Bebidas"
								onPress={handleCategoryPress}
								isSelected={selectedCategory === "Bebidas"}
							/>

							<CategoryItem icon={IceCreamBowl} name="Sobremesas"
								onPress={handleCategoryPress}
								isSelected={selectedCategory === "Sobremesas"}
							/>

							<CategoryItem icon={Fish} name="Sushi"
								onPress={handleCategoryPress}
								isSelected={selectedCategory === "Sushi"}
							/>
						</View>
					</ScrollView>
				</View>

				<View className="my-6 items-center px-5">

					<Text className="mb-4 self-start text-lg font-bold text-[#102A43]">
						Restaurantes
					</Text>

					<FlatList
						data={filteredRestaurants}
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