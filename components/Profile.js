import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  createSwitchNavigator,
  createAppContainer,
  StackNavigator,
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

export default class Profile extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.push("Login")}
        />
      </View>
    );
  }
}
