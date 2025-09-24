import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { iconsImg } from "@/assets/asset";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarStyle: {
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          // borderBottomLeftRadius: 50,
          // borderBottomRightRadius: 50,
          // marginHorizontal: 20,
          // paddingHorizontal: 10,
          paddingTop: 10,
          height: 80,
          position: "absolute",
          // bottom: 30,
          backgroundColor: "black",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: () => <Text className="text-white text-xs">Home</Text>,
          tabBarIcon: ({ focused }) => (
            <Image source={iconsImg.HomeImg} className="w-8 h-8" />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarLabel: () => <Text className="text-white text-xs">About</Text>,
          tabBarIcon: ({ focused }) => (
            <Image source={iconsImg.ExploreImg} className="w-8 h-8" />
          ),
        }}
      />
      <Tabs.Screen
        name="project"
        options={{
          title: "Project",
          tabBarLabel: () => (
            <Text className="text-white text-xs">Project</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image source={iconsImg.ProjectImg} className="w-8 h-8" />
          ),
        }}
      />
      <Tabs.Screen
        name="skills"
        options={{
          title: "Skills",
          tabBarLabel: () => <Text className="text-white text-xs">Skills</Text>,
          tabBarIcon: ({ focused }) => (
            <Image source={iconsImg.SkillImg} className="w-8 h-8" />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarLabel: () => (
            <Text className="text-white text-xs">Contact</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image source={iconsImg.PhoneImg} className="w-8 h-8" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
