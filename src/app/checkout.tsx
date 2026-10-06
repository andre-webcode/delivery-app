import { PaymentOption } from "@/components/PaymentOption";
import { useCartStore } from "@/store/cartStore";
import { calculateCartTotal, calculateSubtotal } from "@/utils/cart";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";


type PaymentMethod = "pix" | "credit" | "cash";

export default function Checkout() {
    const cart = useCartStore((state) => state.cart);
    const total = calculateCartTotal(cart);

    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("pix")


    const handlePix = () => {
        setPaymentMethod("pix");
    }

    const handleCreditCard = () => {
        setPaymentMethod("credit");
    }

    const handleCash = () => {
        setPaymentMethod("cash");
    }


    const handleFinalizeOrder = () => {
        router.push("/order-confirmed");
    };

    return (

        <View className="flex-1 px-5 bg-[#F8FAFC]">
            <Text className="mt-6 text-2xl font-bold text-[#102A43]">
                Finalizar pedido
            </Text>
            <Text className="mt-6 text-lg font-bold text-[#102A43]">
                Endereço de entrega
            </Text>

            <View className="mt-3 rounded-2xl bg-[#E8EEF5] p-4">
                <Text className="text-base font-bold text-[#102A43]">
                    Minha casa
                </Text>

                <Text className="mt-1 text-sm text-[#64748B]">
                    Rua Exemplo, 123
                </Text>

                <Text className="mt-1 text-sm text-[#64748B]">
                    Bairro Centro
                </Text>
            </View>

            <View className="mt-6">
                <Text className=" text-lg font-bold text-[#102A43]">
                    Resumo do pedido
                </Text>

                {cart.map((item) => (
                    <View
                        key={item.product.id}
                        className="mt-3 flex-row items-center justify-between"
                    >
                        <View className="flex-1">
                            <Text className="text-base font-bold text-[#102A43]">
                                {item.product.name}
                            </Text>

                            <Text className="mt-1 text-sm text-[#64748B]">
                                {item.quantity}x
                            </Text>
                        </View>

                        <Text className="text-base font-bold text-[#102A43]">
                            R$ {calculateSubtotal(item.product.price, item.quantity).toFixed(2)}
                        </Text>

                    </View>
                ))}

                <View className="mt-4 flex-row items-center justify-between border-t border-gray-200 pt-4">
                    <Text className="text-lg font-bold text-[#102A43]">
                        Total
                    </Text>

                    <Text className="text-xl font-bold text-[#102A43]">
                        R$ {total.toFixed(2)}
                    </Text>
                </View>
            </View>

            <View className="mt-10">

                <Text className="text-lg font-bold text-[#102A43]">
                    Forma de pagamento
                </Text>

                <PaymentOption
                    label="Pix"
                    selected={paymentMethod === "pix"}
                    onPress={handlePix}
                />

                <PaymentOption
                    label="Cartão de crédito"
                    selected={paymentMethod === "credit"}
                    onPress={handleCreditCard}
                />

                <PaymentOption
                    label="Dinheiro"
                    selected={paymentMethod === "cash"}
                    onPress={handleCash}
                />
            </View>


            <Pressable  onPress={handleFinalizeOrder}
             className="mt-8 rounded-2xl bg-[#102A43] py-4"
            >
                <Text className="text-center text-base font-bold text-white">
                    Finalizar pedido
                </Text>
            </Pressable>

        </View>



    )
}