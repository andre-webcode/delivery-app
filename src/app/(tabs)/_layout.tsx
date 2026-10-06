import { useCartStore } from "@/store/cartStore";
import { calculateCartItemCount } from "@/utils/cart";
import { Tabs } from "expo-router";
import { ClipboardList, House, Search, ShoppingCart, UserRound } from "lucide-react-native";

export default function TabLayout() {
    const cart = useCartStore((state) => state.cart);

    const itemCount = calculateCartItemCount(cart);


    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#102A43",
            tabBarInactiveTintColor: "#64748B",
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <House color={color} size={size} />
                    )

                }}
            />

            <Tabs.Screen
                name="search"
                options={{
                    title: "Buscar",
                    tabBarIcon: ({ color, size }) => (
                        <Search color={color} size={size} />
                    ),

                }}
            />

            <Tabs.Screen
                name="cart"
                options={{
                    title: "Carrinho",
                    tabBarBadge: itemCount > 0 ? itemCount : undefined,
                    tabBarBadgeStyle: {
                        backgroundColor: "#F97316",
                        color: "#FFFFFF",
                    },
                    tabBarIcon: ({ color, size }) => (
                        <ShoppingCart color={color} size={size} />
                    ),
                }}
            />

            <Tabs.Screen
                name="orders"
                options={{
                    title: "Pedidos",
                    tabBarIcon: ({ color, size }) => (
                        <ClipboardList color={color} size={size} />
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color, size }) => (
                        <UserRound color={color} size={size} />
                    ),
                }}
            />

        </Tabs>
    )
}