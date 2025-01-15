import React from "react";
import { useGlobalContext } from "@/context/global-provider";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, Slot } from "expo-router";
import CustomActivityIndicator from "@/components/CustomActivityIndicator";

export default function AppLayout() {
  const { loading, isLoggedIn } = useGlobalContext();

  if (loading) {
    return (
      <SafeAreaView className="bg-white dark:bg-black size-full flex justify-center items-center">
        <CustomActivityIndicator />
      </SafeAreaView>
    );
  }

  if (!isLoggedIn) return <Redirect href="/signIn" />;

  return <Slot />;
}
