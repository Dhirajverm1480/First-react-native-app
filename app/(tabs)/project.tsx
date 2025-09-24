import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { projectsData } from "@/constants/data";
import ImageImg from "@/assets/images/image.png";

const project = () => {
  return (
    <SafeAreaView className="mb-24">
      <FlatList
        data={projectsData.projects}
        renderItem={({ item, index }) => {
          return (
            <View className="p-3">
              <Pressable className="w-full h-48 flex-1 justify-end rounded-lg overflow-hidden">
                {/* <Image source={ImageImg} className="w-32 h-24" /> */}
                <ImageBackground
                  source={ImageImg}
                  className="w-full h-full absolute justify-center items-center"
                ></ImageBackground>

                <View className=" text-white p-1">
                  <Text className="text-white">{item.title}</Text>
                  <Text className="text-white">{item.subtitle}</Text>
                  {/* <Text className="text-white">{item.description}</Text> */}
                </View>
              </Pressable>
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()} // This ensures unique keys based on `id`
      />
    </SafeAreaView>
  );
};

export default project;
