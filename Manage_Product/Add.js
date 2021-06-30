import React from "react";

// import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import { DataTable } from "react-native-paper";
import { createStackNavigator } from "react-navigation-stack";

import * as ImagePicker from "expo-image-picker";
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
class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      p_name: "",
      p_dec: "",
      p_status: "",
      p_cat: "",
    };
  }
  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  upload = () => {
    const { navigation } = this.props;
    const user_name = navigation.getParam("category", "NO-User");
    // alert(user_name);
    this.setState({
      p_cat: user_name,
    });

    var pname = this.state.p_name;
    var pstatus = this.state.p_status;
    var pdec = this.state.p_dec;
    var pcat = user_name;

    fetch("http://192.168.1.9:3000/product_insert", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        p_name: pname,
        p_dec: pdec,
        p_status: pstatus,
        p_cat: pcat,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.success === true) {
          alert(res.message);
        } else {
          alert("error");
        }
      })
      .done();
  };

  render() {
    const { navigation } = this.props;
    const user_name = navigation.getParam("category", "NO-User");
    // this.setState({
    //   p_cat: user_name,
    // });
    return (
      <ScrollView>
        <KeyboardAvoidingView
          style={styles.wrapper}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.container2}>
            {/* <View style={styles.inputtype}> */}
            {/* <Text style={styles.header_text}>{user_name}</Text> */}
            <View>
              <Text style={styles.inputtype2}>category: {user_name}</Text>

              {/* <TextInput
                placeholder="Product_Id.."
                style={styles.inputtype}
                onChangeText={(p_id) => this.setState({ p_id })}
              /> */}

              <TextInput
                placeholder="Product_Name.."
                style={styles.inputtype}
                onChangeText={(p_name) => this.setState({ p_name })}
              />
              <TextInput
                placeholder="Description.."
                style={styles.inputtype}
                multiline={true}
                numberOfLines={10}
                onChangeText={(p_dec) => this.setState({ p_dec })}
              />
              <DropDownPicker
                placeholder="Status"
                items={[
                  { label: "Active", value: "Active" },
                  { label: "Block", value: "Block" },
                ]}
                onChangeItem={(item) => this.setState({ p_status: item.value })}
                // onChangeText={(items) => this.setState({ p_status })}
                containerStyle={{
                  width: "100%",
                  height: 80,
                  padding: 12,
                }}
                placeholderStyle={{
                  fontWeight: "bold",
                  textAlign: "center",
                }}
                style={{ paddingVertical: 10 }}
              />
              <TouchableOpacity onPress={this.pickImage}>
                <Text style={styles.inputtype2}>
                  Upload Photo
                  <FontAwesome5
                    name="camera"
                    size={30}
                    color="#000000"
                  ></FontAwesome5>
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.upload}>
                <Text style={styles.inputtype3}>
                  Upload
                  <FontAwesome5
                    name="upload"
                    size={30}
                    color="#000000"
                  ></FontAwesome5>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}
export default Add;
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
