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

class filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      f_level: "",
      l_status: "",
      show1: true,
      //   show2: true,
    };
  }
  componentDidMount() {
    this.setState({
      show1: true,
    });
  }
  back = () => {
    // this.setState({
    //   show1: false,
    //   //   show2: false,
    // });
    this.props.navigation.navigate("Home");
  };
  search = () => {
    var level = this.state.f_level;
    var status = this.state.l_status;
    this.props.navigation.navigate("Filter2", {
      value1: level,
      value2: status,
    });
    this.setState({
      show1: false,
    });
  };

  render() {
    return (
      <View>
        <Modal transparent={true} visible={this.state.show1}>
          <KeyboardAvoidingView
            style={styles.wrapper}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
              <View
                style={{
                  backgroundColor: "#fff",
                  margin: 30,
                  padding: 40,
                  borderRadius: 10,
                  flex: 1,
                }}
              >
                <Text style={{ fontSize: 18, letterSpacing: 7 }}>
                  Filters Level....
                </Text>
                <DropDownPicker
                  placeholder="Select Levels"
                  items={[
                    { label: "Level1", value: "1" },
                    { label: "Level2", value: "2" },
                    { label: "Level3", value: "3" },
                    { label: "Level4", value: "4" },
                    { label: "Level5", value: "5" },
                    { label: "Level6", value: "6" },
                    { label: "Level7", value: "7" },
                  ]}
                  onChangeItem={(item) =>
                    this.setState({ f_level: item.value })
                  }
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
                <DropDownPicker
                  placeholder="Status"
                  items={[
                    { label: "Completed", value: "Completed" },
                    { label: "Pending", value: "Pending" },
                  ]}
                  onChangeItem={(item) =>
                    this.setState({ l_status: item.value })
                  }
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

                <TouchableOpacity style={styles.btnmodal} onPress={this.search}>
                  <Text style={styles.btn_text}>Filter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnmodal2} onPress={this.back}>
                  <Text style={styles.btn_text2}>Back</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </Modal>
      </View>
    );
  }
}
export default filter;
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
    // width: "50%",
    backgroundColor: "#ffff99",
    padding: 5,
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
