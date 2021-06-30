import React from "react";
import Screen from "./Screen.js";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";

export const ProductScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Product" />
);
export const UserScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="User" />
);
export const SearchScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Search" />
);
export const MessageScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Message" />
);
export const UpdateScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Update" />
);
export const LogoutScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Logout" />
);
export const ReportScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Report" />
);
