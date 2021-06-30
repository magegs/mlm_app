import React from "react";
// import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import { DataTable } from "react-native-paper";
import { createStackNavigator } from "react-navigation-stack";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Alert,
  ActivityIndicator,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Modal,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { ListItem, SearchBar } from "react-native-elements";

import HomeScreen from "../Manage_Product/HomeScreen";
import Screen1 from "../Manage_Product/Screen1";
import Screen2 from "../Manage_Product/Screen2";
import Add from "../Manage_Product/Add";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        // title: "Manage Product",
        headerMode: "none",
        headerShown: false,
      },
    },
    Screen1: {
      screen: Screen1,
      navigationOptions: {
        title: "Search...",
        headerMode: "none",
        // headerShown: false,
        headerStyle: {
          backgroundColor: "#ffff80",
        },
      },
    },

    Screen2: {
      screen: Screen2,
      navigationOptions: {
        title: "Product_Details",
        headerStyle: {
          backgroundColor: "#ffff80",
        },
        // headerMode: "none",
        // headerShown: false,
      },
    },
    Add_Product: {
      screen: Add,
      navigationOptions: {
        title: "Add_Products..",
        headerStyle: {
          backgroundColor: "#ffff80",
        },
        // headerMode: "none",
        // headerShown: false,
      },
    },
    // Home: HomeScreen,
    // Screen1: Screen1,
    // Screen2: Screen2,
    // headerMode: "none",
  },

  {
    // headerMode: "none",
    initialRouteName: "Home",
  }
);

export default createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  container2: {
    flex: 1,
    // justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  wrapper: {
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
  header_text: {
    fontSize: 18,
    textAlign: "center",
    // fontWeight: "bold",
    // justifyContent: "center",
    color: "#000000",
    padding: 10,
    letterSpacing: 5,
    fontFamily: "sans-serif",
  },
  header1: {
    backgroundColor: "#ffff80",
    borderRadius: 35,
  },
  GridViewContainer: {
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ffffb3",
    borderWidth: 5,
    height: 250,
    margin: 7,
    opacity: 0.7,
    backgroundColor: "#ffffff",
  },
  GridViewTextLayout: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    color: "#000000",
    padding: 10,
    letterSpacing: 7,
    fontFamily: "sans-serif",
  },
  text: {
    color: "#000000",
    fontSize: 20,
  },
  box: {
    backgroundColor: "#ffffff",
    padding: 15,
    margin: 10,
    borderRadius: 8,

    // marginTop:50
  },
  text: {
    fontWeight: "bold",
    color: "#000000",
    fontSize: 20,
  },
  textInput: {
    alignSelf: "stretch",
    padding: 6,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderWidth: 1,
    margin: 10,
  },
  touchableOpacityStyle: {
    position: "absolute",
    width: 60,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: "contain",
    width: 60,
    height: 70,
    justifyContent: "center",
    right: 30,
    bottom: 30,
    position: "absolute",
    alignItems: "center",
    //backgroundColor:'black'
  },
  header_text3: {
    fontSize: 14,
    textAlign: "left",
    // fontWeight: "bold",
    // justifyContent: "center",
    marginTop: 10,
    color: "#000000",
    padding: 15,
    letterSpacing: 7,
    fontFamily: "sans-serif",
  },
  btn_text: {
    fontSize: 12,
    letterSpacing: 4,
    fontWeight: "bold",
    marginTop: 4,
    color: "#000000",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ffff99",
  },
  btn_text2: {
    fontSize: 14,
    letterSpacing: 10,
    fontWeight: "bold",
    marginTop: 4,
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    // backgroundColor: "#ffff99",
  },
  inputtype: {
    marginHorizontal: 12,
    marginTop: 10,
    padding: 12,
    backgroundColor: "#fff",
    borderColor: "#000000",
    borderWidth: 1,
  },
  inputtype2: {
    marginHorizontal: 12,
    marginTop: 30,
    padding: 12,
    fontSize: 20,
    backgroundColor: "#fff",
    color: "#000",
    borderColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    textAlign: "center",
    letterSpacing: 3,
  },
  inputtype3: {
    marginHorizontal: 12,
    marginTop: 20,
    padding: 12,
    fontSize: 20,
    backgroundColor: "#ffcc99",
    color: "#000",
    borderColor: "#fff",
    borderWidth: 1,
    textAlign: "center",
    letterSpacing: 5,
  },
  inputtypemodal: {
    marginHorizontal: 5,
    marginTop: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderBottomColor: "#000000",
    borderWidth: 1,
  },
  btnmodal: {
    alignSelf: "stretch",
    backgroundColor: "#ffff99",
    padding: 10,
    borderRadius: 7,
    alignItems: "center",
    fontSize: 18,
    color: "#000000",
    letterSpacing: 7,
    fontWeight: "bold",
  },
  btnmodal2: {
    marginTop: 10,
    alignSelf: "stretch",
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 7,
    alignItems: "center",
    fontSize: 18,
    color: "#fff",
    letterSpacing: 7,
    fontWeight: "bold",
  },
});
