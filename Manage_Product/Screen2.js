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

class Screen2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      p_id: "PRO1",
      data: [],
      category: "",
      datasource: [],
      isLoading: true,
      show: false,
    };
  }
  componentDidMount() {
    this.getdata();
  }
  modal = () => {
    this.setState({
      show: true,
    });
  };
  back = () => {
    // alert("heoooo");
    // this.props.navigation.navigate("Screen2");
    this.setState({
      show: false,
    });
  };

  renderItem = ({ item }) => {
    return (
      <ScrollView style={{ marginTop: 10 }}>
        <DataTable
          style={{
            backgroundColor: "#ffffff",

            borderRadius: 8,
            borderColor: "#000000",
            borderWidth: 1,
          }}
        >
          <DataTable.Header style={{ color: "#ffffff" }}>
            <DataTable.Title>
              <Text style={styles.header_text3}>Product Details..</Text>
            </DataTable.Title>
          </DataTable.Header>

          <DataTable.Row style={{ flex: 3 }}>
            <DataTable.Cell>Product_Id</DataTable.Cell>
            <DataTable.Cell numeric>{item.product_id}</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Name</DataTable.Cell>
            <DataTable.Cell numeric>{item.product_name}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Product_Desc</DataTable.Cell>
            <DataTable.Cell numeric>{item.product_desc}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Status</DataTable.Cell>
            <DataTable.Cell numeric>{item.product_category}</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell numeric>
              <TouchableOpacity style={styles.btn} onPress={this.modal}>
                <Text style={styles.btn_text}>Edit</Text>
              </TouchableOpacity>
            </DataTable.Cell>
          </DataTable.Row>

          {/* <DataTable.Pagination
              page={1}
              numberOfPages={3}
              onPageChange={(page) => {
                console.log(page);
              }}
              label="1-2 of 6"
            /> */}
        </DataTable>
        <Modal transparent={true} visible={this.state.show}>
          <KeyboardAvoidingView
            style={styles.wrapper}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
              <ScrollView>
                <View
                  style={{
                    backgroundColor: "#fff",
                    margin: 30,
                    padding: 40,
                    borderRadius: 10,
                    flex: 1,
                  }}
                >
                  <Text style={styles.inputtype2}>
                    Current_Status:{item.status}
                  </Text>
                  <Text style={styles.inputtypemodal}>{item.product_id}</Text>

                  <TextInput
                    placeholder={item.product_name}
                    style={styles.inputtypemodal}
                  />
                  <TextInput
                    placeholder={item.product_desc}
                    style={styles.inputtypemodal}
                    multiline={true}
                    numberOfLines={3}
                  />
                  <DropDownPicker
                    placeholder="Status"
                    items={[
                      { label: "Active", value: "Active" },
                      { label: "Block", value: "Block" },
                    ]}
                    onChangeItem={(item) =>
                      this.setState({ p_status: item.value })
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
                  <TouchableOpacity style={styles.btnmodal}>
                    <Text style={styles.btn_text}>Save Change</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.btnmodal2}
                    onPress={this.back}
                  >
                    <Text style={styles.btn_text2}>Back</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </KeyboardAvoidingView>
        </Modal>
      </ScrollView>
    );
  };
  getdata = () => {
    const { navigation } = this.props;
    const id = navigation.getParam("p_id", "NO-User");
    fetch("http://192.168.1.9:3000/product_details", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        p_id: id,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          datasource: res,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return this.state.isLoading ? (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#ffad33" />
      </View>
    ) : (
      <View style={styles.container}>
        <FlatList
          data={this.state.datasource}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.product_id.toString()}
          // ItemSeparatorComponent={this.renderSeparator}
          // ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}
export default Screen2;
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
