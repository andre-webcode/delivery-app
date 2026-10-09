import { useOrderStore } from "@/store/orderStore";
import { Bike, MapPin, Store } from "lucide-react-native";
import { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";


const route = [
  { x: 0, y: 0 },
  { x: 28, y: 22 },
  { x: 28, y: 92 },
  { x: 118, y: 92 },
  { x: 118, y: 162 },
  { x: 270, y: 162 },
];

type Props = {
  onDeliveryComplete: () => void;
}

export default function OrderMap({ onDeliveryComplete }: Props) {
  const order = useOrderStore((state) => state.order);

  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;


  useEffect(() => {
    if (!order) {
      return;
    }

    if (order.status === "on_the_way") {
      Animated.sequence([
        Animated.timing(position, {
          toValue: route[1],
          duration: 2000,
          useNativeDriver: true,
        }),

        Animated.timing(position, {
          toValue: route[2],
          duration: 2000,
          useNativeDriver: true,
        }),

        Animated.timing(position, {
          toValue: route[3],
          duration: 2000,
          useNativeDriver: true,
        }),

        Animated.timing(position, {
          toValue: route[4],
          duration: 2000,
          useNativeDriver: true,
        }),

        Animated.timing(position, {
          toValue: route[5],
          duration: 2000,
          useNativeDriver: true,
        }),

        
      ]).start(({ finished }) => {
        if (finished) {
          onDeliveryComplete();
        }
      });
    }
  }, [order?.status, position]);




  return (
    <View className="mt-6 h-64 overflow-hidden rounded-3xl bg-[#E8EEF5]">
      {/* Ruas horizontais */}
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 55,
          height: 14,
          backgroundColor: "#FFFFFF",
        }}
      />

      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 125,
          height: 14,
          backgroundColor: "#FFFFFF",
        }}
      />

      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 195,
          height: 14,
          backgroundColor: "#FFFFFF",
        }}
      />

      {/* Ruas verticais */}
      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 65,
          width: 14,
          backgroundColor: "#FFFFFF",
        }}
      />

      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 155,
          width: 14,
          backgroundColor: "#FFFFFF",
        }}
      />

      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 240,
          width: 14,
          backgroundColor: "#FFFFFF",
        }}
      />

      {/* Rua diagonal */}
      <View
        style={{
          position: "absolute",
          width: 220,
          height: 14,
          top: 105,
          left: 50,
          backgroundColor: "#FFFFFF",
          transform: [{ rotate: "-25deg" }],
        }}
      />

      {/* Rota azul - trecho vertical */}
      <View
        style={{
          position: "absolute",
          left: 70,
          top: 62,
          width: 4,
          height: 70,
          backgroundColor: "#2563EB",
          borderRadius: 2,
        }}
      />

      {/* Rota azul - trecho horizontal */}
      <View
        style={{
          position: "absolute",
          left: 72,
          top: 130,
          width: 90,
          height: 4,
          backgroundColor: "#2563EB",
          borderRadius: 2,
        }}
      />

      {/* Rota azul - segundo trecho vertical */}
      <View
        style={{
          position: "absolute",
          left: 160,
          top: 132,
          width: 4,
          height: 70,
          backgroundColor: "#2563EB",
          borderRadius: 2,
        }}
      />

      {/* Rota azul - trecho final horizontal */}
      <View
        style={{
          position: "absolute",
          left: 162,
          top: 200,
          width: 145,
          height: 4,
          backgroundColor: "#2563EB",
          borderRadius: 2,
        }}
      />


      {/* Restaurante */}
      <View className="absolute left-6 top-5 items-center">
        <View className="h-10 w-10 items-center justify-center rounded-full bg-white">
          <Store size={20} color="#102A43" />
        </View>

        <Text className="mt-1 text-xs font-bold text-[#102A43]">
          Restaurante
        </Text>
      </View>

      {/* Entregador */}
      <Animated.View className="absolute left-32 top-28 items-center"
        style={{ transform: position.getTranslateTransform() }}
      >
        <View className="h-10 w-10 items-center justify-center rounded-full bg-[#102A43]">
          <Bike size={20} color="#FFFFFF" />
        </View>

        <Text className="mt-1 text-xs font-bold text-[#102A43]">
          Entregador
        </Text>
      </Animated.View>

      {/* Cliente */}
      <View className="absolute bottom-6 right-6 items-center">
        <View className="h-10 w-10 items-center justify-center rounded-full bg-white">
          <MapPin size={22} color="#102A43" />
        </View>

        <Text className="mt-1 text-xs font-bold text-[#102A43]">
          Você
        </Text>
      </View>
    </View>
  );
}