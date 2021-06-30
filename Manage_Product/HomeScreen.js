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

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      GridListItems: [
        { key: "kitchen Accessories" },
        { key: "T-Shirts" },
        { key: "Sarees" },
        { key: "Plastic Store" },
      ],
    };
  }

  GetGridViewItem(item) {
    this.props.navigation.navigate("Screen1", { data: item });
    // Alert.alert(item);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffff80" />
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ alignItems: "flex-end", margin: 16 }}
            onPress={this.props.navigation.openDrawer}
          >
            <FontAwesome5 name="bars" size={24} color="#000000"></FontAwesome5>
          </TouchableOpacity>

          <View>
            <FlatList
              data={this.state.GridListItems}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.GridViewContainer}
                  onPress={this.GetGridViewItem.bind(this, item.key)}
                >
                  <View>
                    <Text
                      style={styles.GridViewTextLayout}
                      // onPress={(item) => this.goToNextScreen(this, item.key)}
                      onPress={this.GetGridViewItem.bind(this, item.key)}
                    >
                      {" "}
                      {item.key}{" "}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              numColumns={1}
            />
          </View>

          {/* <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          ></View> */}
        </SafeAreaView>
      </View>
    );
  }

  goToNextScreen = (item) => {
    // this.props.navigation.navigate("Profile", { data: });
  };
}
export default HomeScreen;
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
    // width: "75%",
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
