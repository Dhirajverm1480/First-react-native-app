import { SafeAreaView } from "react-native-safe-area-context";
// import "./global.css"
import { FlatList, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { iconsImg } from "@/assets/asset";

export default function App() {
  return (
    <SafeAreaView>
      <ImageBackground
        source={iconsImg.BackGroundImg}
        className="w-full h-full"
      >
        <View className="bg-[#00000077] flex-1 justify-center items-start px-4">
          <Text className="text-white text-3xl mb-2">Hi, I'm Dhiraj Verma.</Text>
          <Text className="text-white text-md">
            Frontend Developer| HTML5, CSS3, JS, React.js Enthusiast
          </Text>
          <Text className="text-white text-sm mt-2">
            I create seamless, interactive web experiences that bring your ideas
            to life.
          </Text>
          <View>
            <TouchableOpacity className="border border-white p-3 mt-2">
              <Text className="text-white">DownLoad CV</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity className="border border-white p-3 mt-2">
              <Text className="text-white">Contact Me</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
