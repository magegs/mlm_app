import React, { Component } from "react";
import { DataTable } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import { ListItem, SearchBar } from "react-native-elements";
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

class filterlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: "",
      datasource: [],
      f_level: "",
      l_status: "",
      show1: true,
      isLoading: true,
      count: "",
    };
    this.arrayholder = [];
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const { navigation } = this.props;
    const value1 = navigation.getParam("value1", "NO-User");
    const value2 = navigation.getParam("value2", "NO-User");
    this.setState({
      l_status: value2,
    });
    fetch("http://192.168.1.9:3000/filter", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        f_value1: value1,
        f_value2: value2,
      }),
    })
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
            data: res,
            isLoading: false,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  searchFilterFunction = (text) => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter((item) => {
      const itemData = `${item.user_id.toUpperCase()} `;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  render() {
    return this.state.isLoading ? (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#ffad33" />
      </View>
    ) : (
      <View style={styles.container}>
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
          <Text style={styles.header_text}>
            {this.state.l_status} Users {this.state.count}
          </Text>
        </View>
        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={styles.box}>
                <Text style={styles.text}>{item.user_id}</Text>
                <Text>Completed Level:{item.completed_level}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
export default filterlist;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },

  header_text: {
    fontSize: 18,
    margin: 10,
    // textAlign: "center",
    // fontWeight: "bold",
    // justifyContent: "center",
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
    backgroundColor: "#ffffb3",
    padding: 20,
    margin: 10,
    borderRadius: 5,

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
