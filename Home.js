// import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from "react";
import Constants from "expo-constants";
import { FontAwesome5 } from "@expo/vector-icons";
//  import {createAppContainer} from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import Product from "./screens/Product";
import filter from "./Manage_Users/filteruser";
import filterlist from "./Manage_Users/filterlist";
// import ChatScreen from "./screens/ChatScreen";
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
  TouchableOpacity,
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  ActivityIndicator,
  AsyncStorage,
} from "react-native";
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
} from "react-navigation";

import SideBar from "./components/SideBar";
import searchUsers from "./screens/searchUsers";
// import Logout from "./screens/Logout";
// import View_Product from "./ProductScreen/View_Product";
import Login from "./components/Login";
import RNPrintExample from "./components/pdf";
import ManageUser from "./screens/ManageUser";

import index from "./chat/index";
import chat2 from "./chat/chat2";

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: "",
      datasource: [],
      isLoading: true,
    };
  }
  nextscreen = () => {
    AsyncStorage.removeItem("user");
    AsyncStorage.removeItem("role");
    this.props.navigation.navigate("Screen2");
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={this.nextscreen}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Drawer = createDrawerNavigator(
  {
    ProductScreen: {
      screen: Product,
      navigationOptions: {
        title: "Manage Product",

        drawerIcon: ({ tintcolor }) => (
          <Feather name="shopping-cart" size={16} color={tintcolor} />
        ),
      },
    },
    UserScreen: {
      screen: ManageUser,
      navigationOptions: {
        title: "Manage User",

        drawerIcon: ({ tintcolor }) => (
          <Feather name="user-check" size={16} color={tintcolor} />
        ),
      },
    },
    Filter: {
      screen: filter,
      navigationOptions: {
        title: "Filters",

        drawerIcon: ({ tintcolor }) => (
          <FontAwesome5 name="filter" size={16} color={tintcolor} />
          // <Feather name="user-check" size={16} color={tintcolor} />
        ),
      },
    },

    ChatScreen: {
      screen: index,
      navigationOptions: {
        title: "Messages",
        drawerIcon: ({ tintcolor }) => (
          <Feather name="message-square" size={16} color={tintcolor} />
        ),
      },
    },
    ReportScreen: {
      screen: RNPrintExample,
      navigationOptions: {
        title: "Report",

        drawerIcon: ({ tintcolor }) => (
          <Feather name="bar-chart" size={16} color={tintcolor} />
        ),
      },
    },
    LogoutScreen: {
      screen: Logout,

      navigationOptions: {
        title: "Logout",
        headerLeft: () => (
          <DrawerButton onPress={() => Alert.alert("Cancel Pressed")} />
        ),
        drawerIcon: ({ tintcolor }) => (
          <Feather name="log-out" size={16} color={tintcolor} />
        ),
      },
    },
    Screen2: {
      screen: Login,
      navigationOptions: {
        drawerLabel: () => null,
        title: null,
        drawerIcon: () => null,
      },
    },

    Filter2: {
      screen: filterlist,
      navigationOptions: {
        drawerLabel: () => null,
        title: null,
        drawerIcon: () => null,
      },
    },
  },
  {
    contentComponent: (props) => <SideBar {...props} />,
    drawerWidth: Dimensions.get("window").width * 0.75,
  }
);
const Appcontainer = createAppContainer(Drawer);
export default class Home extends React.Component {
  render() {
    return <Appcontainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  box: {
    backgroundColor: "#ff9f80",
    padding: 10,
    margin: 10,
  },
  text: {
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 20,
  },
});
