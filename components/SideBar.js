import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  StatusBar,
} from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
export default Sidebar = (props) => (
  <ScrollView>
    <ImageBackground
      style={{
        width: undefined,
        padding: 16,
        paddinTop: 48,
        backgroundColor: "#ffff80",
      }}
    >
      <Image source={require("../assets/profile.jpg")} style={styles.profile} />
      <Text style={styles.name}>Mage</Text>
      {/* <View style={{flexDirection:'row'}}>
        <Text style={styles.follwers}>18 Refered_Person's</Text>
        <Ionicons name="md-people"size={20}></Ionicons>
    </View> */}
    </ImageBackground>
    <View style={styles.container}>
      <DrawerNavigatorItems {...props}></DrawerNavigatorItems>
    </View>
  </ScrollView>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
  },
  name: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "800",
    marginVertical: 5,
    left: 12,
  },
  follwers: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "300",
    marginRight: 5,
  },
});
