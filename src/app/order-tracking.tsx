import { useOrderStore } from "@/store/orderStore";
import { OrderStatus } from "@/types/order";
import { getStatusLabel } from "@/utils/order";
import { Text, View } from "react-native";

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


	if (!order) {
		return (
			<View className="flex-1 items-center justify-center bg-[#F8FAFC]">
				<Text className="text-2xl font-bold text-[#102A43]">
					Nenhum pedido encontrado.
				</Text>
			</View>
		);
	};


	const getStatusIndex = (status: OrderStatus) => {
		return statusSteps.findIndex((step) => step.status === status);
	};

	const currentStatusIndex = getStatusIndex(order.status);

	return (
		<View className="flex-1 bg-[#F8FAFC] px-5">
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

			<View className="relative mt-6 gap-5">
				<View className="absolute top-2 bottom-2 left-[7px]  w-0.5 bg-[#CBD5E1]" />
				{statusSteps.map((step, index) => {
					const isCompleted = index <= currentStatusIndex;

					return (
						<View
							key={step.status}
							className=" flex-row items-center"
						>
							<View
								className={
									isCompleted
										? "h-4 w-4 rounded-full bg-[#102A43]"
										: "h-4 w-4 rounded-full bg-[#CBD5E1]"
								}
							/>

							<Text
								className={
									isCompleted
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
		</View>
	);
}