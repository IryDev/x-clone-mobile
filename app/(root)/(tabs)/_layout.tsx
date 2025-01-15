import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          borderTopWidth: 1,
          borderTopColor: "#0061FF1A",
          minHeight: 70,
        },
      }}
    >
      <Text>TabsLayout</Text>
    </Tabs>
  );
};

export default TabsLayout;
