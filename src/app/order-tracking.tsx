import OrderMap from "@/components/OrderMap";
import { useOrderStore } from "@/store/orderStore";
import type { OrderStatus } from "@/types/order";
import { getStatusLabel } from "@/utils/order";
import { Check, CircleDot } from "lucide-react-native";
import { useEffect } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useRouter } from "expo-router";

const statusSteps: { status: OrderStatus; label: string; }[] = [
	{
		status: "preparing",
		label: "Preparando seu pedido",
	},
	{
		status: "on_the_way",
		label: "Seu pedido está a caminho",
	},
	{
		status: "delivered",
		label: "Pedido entregue",
	},
];

export default function OrderTracking() {
	const order = useOrderStore((state) => state.order);
	const updateOrderStatus = useOrderStore((state) => state.updateOrderStatus);
	const router = useRouter();

	useEffect(() => {
		if (!order) {
			return;
		}

		if (order.status === "preparing") {
			const timer = setTimeout(() => {
				updateOrderStatus("on_the_way");
			}, 5000);

			return () => {
				clearTimeout(timer);
			}
		}



	}, [order?.status, updateOrderStatus]);

	if (!order) {
		return (
			<View className="flex-1 items-center justify-center bg-[#F8FAFC]">
				<Text className="text-2xl font-bold text-[#102A43]">
					Nenhum pedido encontrado.
				</Text>
			</View>
		);
	};

	const handleDeliveryComplete = () => {
		updateOrderStatus("delivered");
	};


	const getStatusIndex = (status: OrderStatus) => {
		return statusSteps.findIndex((step) => step.status === status);
	};

	const currentStatusIndex = getStatusIndex(order.status);

	const handleGoHome = () => {
		router.replace("/");
	}

	return (
		<ScrollView className="flex-1 bg-[#F8FAFC]"  contentContainerClassName="px-5 pb-8">
			<Text className="mt-6 text-2xl font-bold text-[#102A43]">
				Acompanhar pedido
			</Text>

			<View className="mt-6 rounded-2xl bg-[#E8EEF5] p-4">
				<Text className="text-base font-bold text-[#102A43]">
					Pedido #{order.id}
				</Text>

				<Text className="mt-2 text-base text-[#64748B]">
					{getStatusLabel(order.status)}
				</Text>

				<Text className="mt-2 text-base font-bold text-[#102A43]">
					Total: R$ {order.total.toFixed(2).replace(".", ",")}
				</Text>
			</View>


			<View className="mt-6 h-64 overflow-hidden rounded-3xl">
				<OrderMap onDeliveryComplete={handleDeliveryComplete} />
			</View>



			<View className="relative mt-20 gap-5 ">
				<View className="absolute bottom-0 left-[11px] top-0 w-[2px] bg-[#CBD5E1]" />
				{statusSteps.map((step, index) => {
					const isCompleted = index <= currentStatusIndex;
					const isCurrent =
						index === currentStatusIndex && order.status !== "delivered";

					return (
						<View key={step.status} className=" flex-row items-center">

							<View className={
								isCompleted
									? "h-6 w-6  rounded-full bg-[#102A43]"
									: isCurrent
										? "h-6 w-6 items-center justify-center rounded-full border-2 border-[#102A43] bg-white"
										: "h-6 w-6 rounded-full bg-[#CBD5E1]"
							}
							style={{
								alignItems: "center",
								justifyContent: "center",
							  }}
							>
								{isCompleted && (
									<Check size={14} color="#ffffff" />
								)}

								{isCurrent && (
									<CircleDot size={16} color="#102A43" />
								)}


							</View>

							<Text
								className={
									isCurrent || isCompleted
										? "ml-3 text-base font-bold text-[#102A43]"
										: "ml-3 text-base text-[#94A3B8]"
								}
							>
								{step.label}
							</Text>

						</View>
					);
				})}

			</View>

			{order.status === "delivered" && (
				<View className="mt-10 items-center rounded-3xl bg-white p-6">
					<Text className="text-3xl">🎉</Text>

					<Text className="mt-3 text-xl font-bold text-[#102A43]">
						Pedido entregue!
					</Text>

					<Text className="mt-2 text-center text-base text-[#64748B]">
						Seu pedido chegou com sucesso.
						{"\n"}
						Bom apetite! 😊
					</Text>

					<Pressable
						onPress={handleGoHome}
						className="mt-5 rounded-xl bg-[#102A43] px-6 py-3"
					>
						<Text className="font-bold text-white">
							Voltar para o início
						</Text>
					</Pressable>
				</View>
			)}

		</ScrollView>
	);
}