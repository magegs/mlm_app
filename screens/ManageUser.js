import React, { Component } from "react";
import { DataTable } from "react-native-paper";
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
  Image,
  ScrollView,
  Modal,
  KeyboardAvoidingView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { ListItem, SearchBar } from "react-native-elements";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

import { createAppContainer } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";
import filter from "../Manage_Users/filteruser";
import HomeScreen2 from "../Manage_Users/HomeScreen2";
import HomeScreen from "../Manage_Users/HomeScreen";

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
    Home2: {
      screen: HomeScreen2,
      navigationOptions: {
        title: "User_Details",
        headerStyle: {
          backgroundColor: "#ffff80",
        },
        // headerMode: "none",
      },
    },
    // Home: HomeScreen,
    // Home2: HomeScreen2,
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
  header_text2: {
    fontSize: 18,
    textAlign: "left",
    // fontWeight: "bold",
    // justifyContent: "center",
    marginTop: 10,
    color: "#000000",
    padding: 15,
    letterSpacing: 7,
    fontFamily: "sans-serif",
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
  btnmodal: {
    marginTop: 10,
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
  wrapper: {
    flex: 1,
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
  inputtypemodal: {
    marginHorizontal: 5,
    marginTop: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderBottomColor: "#000000",
    borderWidth: 1,
  },
  // btn: {
  //   alignSelf: "stretch",
  //   backgroundColor: "#ffff99",

  //   alignItems: "center",
  // },
});
