// import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from "react";
import Constants from "expo-constants";
//  import {createAppContainer} from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import Product from "./screens/Product";
import {
  ProductScreen,
  SearchScreen,
  MessageScreen,
  UpdateScreen,
  LogoutScreen,
  ReportScreen,
  UserScreen,
} from "./screens";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
} from "react-native";
import {
  createSwitchNavigator,
  createAppContainer,
  StackNavigator,
} from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";

import SideBar from "./components/SideBar";
import searchUsers from "./screens/searchUsers";
// import ChatScreen from "./screens/ChatScreen";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Home from "./Home";
import chat2 from "./chat/chat2";

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Home: {
      screen: Home,
    },
    ChatScreen: {
      screen: chat2,
    },
  },
  {
    headerMode: "none",
  }
);
const Appcontainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return <Appcontainer />;
  }
}
