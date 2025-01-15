import { Text, Touchable, View } from "react-native";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import { logout } from "@/lib/appwrite/config";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex justify-center items-center bg-white dark:bg-black h-full">
      <Text className="dark:text-white text-3xl font-bold">Welcome to X</Text>

      <Link href="/explore">
        <Text className="dark:text-white">Go to explore</Text>
      </Link>
      <Link href="/signIn">
        <Text className="dark:text-white">Go to signIn</Text>
      </Link>

      <Link href="/notifications">
        <Text className="dark:text-white">Go to notifications</Text>
      </Link>

      <TouchableOpacity
        onPress={() => {
          logout();
          router.push("/signIn");
        }}
      >
        <Text className="dark:text-white">Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
