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

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: "",
      datasource: [],
      isLoading: true,
      count: "",
    };
    this.arrayholder = [];
  }
  componentDidMount() {
    const url = "http://192.168.1.9:3000/m_user";
    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        if (res.success === false) {
          alert(res.message);
          this.setState({
            isLoading: false,
          });
        } else {
          var row_count = Object.keys(res).length;
          this.arrayholder = res;
          this.setState({
            count: row_count,
            datasource: res,
            isLoading: false,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  searchFilterFunction = (text) => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter((item) => {
      const itemData = `${item.User_id.toUpperCase()} ${item.name.toUpperCase()} `;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      datasource: newData,
    });
  };
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={this.nextscreen}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            margin: 10,
            backgroundColor: "#ffffff",
            marginBottom: 3,
            padding: 10,
            borderRadius: 8,
            borderColor: "#f0f5f5",
            borderWidth: 4,
          }}
        >
          {/* <Image
            style={{ width: 80, height: 80, margin: 5 }}
            source={{ uri: item.url }}
          /> */}
          <View style={{ flex: 1, justifyContent: "center", marginLeft: 5 }}>
            <Text style={{ fontSize: 16, color: "#000000", marginBottom: 15 }}>
              {item.user_id}
            </Text>
            <Text style={{ fontSize: 16, color: "#000000" }}>
              {item.completed_level}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  nextscreen = (item) => {
    this.props.navigation.navigate("Home2", { u_id: item });
    // this.props.navigation.navigate("Home2");
  };

  render() {
    return this.state.isLoading ? (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#ffad33" />
      </View>
    ) : (
      <View style={styles.container}>
        <View style={{ backgroundColor: "#ffff80" }}></View>
        <View style={styles.header1}>
          <SearchBar
            placeholder="Type Here..."
            containerStyle={{
              backgroundColor: "#ffff80",
              borderBottomColor: "#ffff80",
              borderTopColor: "#ffff80",
            }}
            inputStyle={{ backgroundColor: "#ffffff" }}
            inputContainerStyle={{
              backgroundColor: "#ffffff",
              borderRadius: 15,
            }}
            onChangeText={(text) => this.searchFilterFunction(text)}
            autoCorrect={false}
            value={this.state.value}
          />
        </View>

        <FlatList
          data={this.state.datasource}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={this.nextscreen.bind(this, item.User_id)}
            >
              <View style={styles.box}>
                <Text style={styles.text}>{item.User_id}</Text>
                <Text style={{ fontSize: 16, letterSpacing: 5 }}>
                  Name :{item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
export default HomeScreen;
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
    backgroundColor: "#f0f5f5aa",
    padding: 15,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000000",

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
