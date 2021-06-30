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
import Profile from "../components/Profile";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  componentDidMount() {
    this._loadInitialState().done();
  }
  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem("user");
    var value2 = await AsyncStorage.getItem("role");
    if (value !== null && value2 === "admin") {
      this.props.navigation.navigate("Home");
    } else if (value !== null && value2 === "user") {
      this.props.navigation.navigate("ChatScreen");
    }
  };
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.container}>
          <Text style={styles.header}>LOGIN HERE...</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter User_Id"
            onChangeText={(username) => this.setState({ username })}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Enter Password"
            onChangeText={(password) => this.setState({ password })}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.btn} onPress={this.login}>
            <Text style={styles.btn_text}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
  login = ({ navigation }) => {
    fetch("http://192.168.1.9:3000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.success === true && res.role === "user") {
          AsyncStorage.setItem("user", res.id);
          // AsyncStorage.setItem("user", res.user);
          AsyncStorage.setItem("role", res.role);
          alert(res.message);
          alert(res.role);
          this.props.navigation.navigate("ChatScreen");

          // this.props.navigation.navigate("ChatScreen");
        } else if (res.success === true && res.role === "admin") {
          AsyncStorage.setItem("user", res.id);
          AsyncStorage.setItem("role", res.role);
          alert(res.message);
          alert(res.role);
          this.props.navigation.navigate("Home");
        } else {
          alert(res.message);
        }
      })
      .done();
  };
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  btn_text: {
    fontSize: 18,
    color: "#000000",
    letterSpacing: 7,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    paddingLeft: 30,
    paddingRight: 30,
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: "#000000",
    fontWeight: "bold",
    textAlign: "left",
    letterSpacing: 7,
    fontFamily: "sans-serif",
  },
  textInput: {
    alignSelf: "stretch",
    padding: 16,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderColor: "#000000",
    borderWidth: 1,
  },
  btn: {
    alignSelf: "stretch",
    backgroundColor: "#ffff99",
    padding: 20,

    alignItems: "center",
  },
});
