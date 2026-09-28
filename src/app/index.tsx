import { Header } from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "@/components/SearchBar";
export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-[#F8FAFC]">
      <Header />
      <SearchBar />
    </SafeAreaView>
  )
}