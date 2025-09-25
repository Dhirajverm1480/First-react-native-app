import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { iconsImg } from "@/assets/asset";
import { hobbyData } from "@/constants/data";

const about = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={iconsImg.BackGroundImg}
        className="w-full h-full"
        resizeMode="cover"
      >
        <View className="p-3">
          <Text className="text-white">
            Hi, I’m Dhiraj — a frontend developer with a passion for building
            clean, responsive, and user-focused web applications. My journey
            into web development started with a simple curiosity about how
            websites are made, and it quickly grew into a full-time passion. I
            specialize in HTML, CSS, JavaScript, and frameworks like React, and
            I love bringing designs to life in the browser. Whether it’s
            crafting pixel-perfect layouts or optimizing performance, I’m always
            looking to create intuitive and engaging digital experiences.
          </Text>
          <TouchableOpacity className="w-48 rounded-lg border border-white p-3 mt-5">
            <Text className="text-white text-center">Contact Us</Text>
          </TouchableOpacity>
          {/* <Image source={iconsImg.BackGroundImg} className="w-full h-full" /> */}
        </View>
        <FlatList
          data={hobbyData.hobbies}
          renderItem={({ item, index }) => {
            return <View></View>;
          }}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default about;
