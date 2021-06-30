import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import {
  createSwitchNavigator,
  createAppContainer,
  StackNavigator,
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import searchUsers from "../screens/searchUsers";
import Login from "../components/Login";
import Profile from "../components/Profile";

// export default class Logout extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   componentDidMount() {
//     AsyncStorage.clear();
//     this.props.navigation.navigate("Login");
//   }

//   render() {
//     return null;
//   }
// }
