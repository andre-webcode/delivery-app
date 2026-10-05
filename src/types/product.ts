import { ImageSourcePropType } from "react-native";

export type Product = {
  id: number;
  restaurantId: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: ImageSourcePropType;
};