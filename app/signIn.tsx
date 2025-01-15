import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useGlobalContext } from "@/context/global-provider";
import { signInWithGoogle } from "@/lib/appwrite/config";
import { Redirect } from "expo-router";
import React from "react";
import { Alert, Image, Platform, ScrollView, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const { refetch, loading, isLoggedIn } = useGlobalContext();

  const colorScheme = useColorScheme();

  if (!loading && isLoggedIn) return <Redirect href="/" />;

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithGoogle();

      if (result) {
        refetch();
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Failed to login");
    }
  };

  const handleSignInWithApple = async () => {
    Alert.alert("Error", "Apple Sign In is not yet implemented");
  };

  return (
    <SafeAreaView className="h-full bg-white px-10 dark:bg-black">
      <ScrollView contentContainerClassName="flex justify-between h-full">
        {colorScheme === "light" ? (
          <Image
            source={images.logo}
            className="w-full h-10"
            resizeMode="contain"
          />
        ) : (
          <Image
            source={images.icon}
            className="w-full h-10"
            resizeMode="contain"
          />
        )}

        <Text className="text-4xl mb-20 font-bold text-black dark:text-white">
          Discover what is happening in the world real time.
        </Text>

        <View className="w-full">
          <TouchableOpacity
            onPress={handleSignInWithGoogle}
            className="my-2 border border-gray-200 dark:bg-white dark:border-transparent w-full p-2 gap-3 rounded-full flex flex-row justify-center items-center"
          >
            <Image
              source={icons.google}
              className="size-8"
              resizeMode="contain"
            />
            <Text className="font-bold text-xl">Continue with Google</Text>
          </TouchableOpacity>

          {Platform.OS === "ios" && (
            <TouchableOpacity
              onPress={handleSignInWithApple}
              className="my-2 border border-gray-200 dark:border-transparent dark:bg-white w-full p-2 gap-3 rounded-full flex flex-row justify-center items-center"
            >
              <Image
                source={icons.apple}
                className="size-8"
                resizeMode="contain"
              />
              <Text className="font-bold text-xl">Continue with Apple</Text>
            </TouchableOpacity>
          )}

          <View className="flex flex-row justify-center items-center gap-4 relative my-2">
            <Text className="text-base text-gray-400 dark:text-gray-400 absolute z-10 px-6 bg-white dark:bg-black">
              or
            </Text>
            <View className="bg-gray-200 dark:bg-gray-700 w-full h-[1px]"></View>
          </View>

          <TouchableOpacity
            className="my-2 border border-transparent bg-black dark:bg-white w-full p-3 gap-3 rounded-full flex flex-row justify-center items-center"
          >
            <Text className="font-bold text-xl text-white dark:text-black">
              Create an account
            </Text>
          </TouchableOpacity>

          <View className="my-10">
            <Text className="text-gray-500">
              By signing up, you agree to the{" "}
              <Text className="text-blue-500">Terms of Service</Text> and{" "}
              <Text className="text-blue-500">Privacy Policy</Text>, including{" "}
              <Text className="text-blue-500">Cookie Use</Text>.
            </Text>
          </View>

          <View className="my-2">
            <Text className="text-gray-500 text-lg">
              Already have an account ?{" "}
            </Text>
            <Text className="text-blue-500 text-lg">Sign in</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
