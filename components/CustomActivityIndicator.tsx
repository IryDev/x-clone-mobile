import React from "react";
import { View, Text, Animated, Easing, Image, StyleSheet } from "react-native";
import { Svg, Circle } from "react-native-svg";
import { images } from "@/constants/images";
import { useColorScheme } from "react-native";

const CustomActivityIndicator = () => {
  const rotateValue = new Animated.Value(0);

  const colorScheme = useColorScheme();

  const strokeColor = colorScheme === "light" ? "#000" : "#fff";

  // Lancer l'animation de rotation
  React.useEffect(() => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 1500, // durée de la rotation
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  // Calcul de la rotation en fonction de la valeur animée
  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View className="flex-col flex align-center justify-center h-full">
      {/* Cercle de chargement */}
      <View className="relative">
        <Animated.View style={{ transform: [{ rotate }] }}>
          <Svg width={100} height={100}>
            <Circle
              cx="50"
              cy="50"
              r="40"
              strokeWidth="2"
              fill="none"
              stroke={strokeColor}
              strokeDasharray="251.2"
              strokeDashoffset="125.6" // Début de la ligne pour l'animation
            />
          </Svg>
        </Animated.View>

        
        <View className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {colorScheme === "light" ? (
            <Image className="size-10" source={images.logo} />
          ) : (
            <Image className="size-10" source={images.icon} />
          )}
        </View>
      </View>

      <Text className="mt-10 text-xl text-black dark:text-white font-bold">
        Loading...
      </Text>
    </View>
  );
};

export default CustomActivityIndicator;
