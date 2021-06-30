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
import filter from "../Manage_Users/filteruser";

class HomeScreen2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      show1: false,
      show2: false,
      editname: "",
      editdate: "",
      editnumber: "",
      bankname: "",
      bankacc: "",
      bankbranch: "",
      ifsc: "",
      nameerror: "",
      dateerror: "",
      mobileerror: "",
      bankbrancherr: "",
      bankaccerr: "",
    };
  }
  modal1 = () => {
    this.setState({
      show1: true,
    });
  };
  modal2 = () => {
    this.setState({
      show2: true,
    });
  };
  back = () => {
    this.setState({
      show1: false,
      show2: false,
    });
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const { navigation } = this.props;
    const value1 = navigation.getParam("u_id", "NO-User");
    fetch("http://192.168.1.9:3000/Manage_User_details", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: value1,
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
          this.setState({
            data: res,
            isLoading: false,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  namevalidator() {
    if (this.state.editname == "") {
      this.setState({
        nameerror: "field cant be Empty",
      });
    } else {
      this.setState({
        nameerror: "",
      });
    }
  }
  datevalidator() {
    if (this.state.editdate == "") {
      this.setState({
        dateerror: "field cant be Empty",
      });
    } else {
      this.setState({
        dateerror: "",
      });
    }
  }
  mobilevalidator() {
    if (this.state.editnumber == "") {
      this.setState({
        mobileerror: "field cant be Empty",
      });
    } else {
      this.setState({
        mobileerror: "",
      });
    }
  }
  bankname() {
    if (this.state.bankname == "") {
      this.setState({
        banknameerr: "field cant be Empty",
      });
    } else {
      this.setState({
        banknameerr: "",
      });
    }
  }
  bankacc() {
    if (this.state.bankacc == "") {
      this.setState({
        bankaccerr: "field cant be Empty",
      });
    } else {
      this.setState({
        bankaccerr: "",
      });
    }
  }
  bankbranch() {
    if (this.state.bankbranch == "") {
      this.setState({
        bankbrancherr: "field cant be Empty",
      });
    } else {
      this.setState({
        bankbrancherr: "",
      });
    }
  }
  ifsc() {
    if (this.state.editnumber == "") {
      this.setState({
        mobileerror: "field cant be Empty",
      });
    } else {
      this.setState({
        mobileerror: "",
      });
    }
  }
  modal1update = (item) => {
    const u_id = item;
    fetch("http://192.168.1.9:3000/update_details", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: u_id,
        u_name: this.state.editname,
        u_mobile: this.state.editnumber,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.success === true) {
          alert(res.message);
          this.setState({
            show1: false,
          });
        } else {
          alert("error");
        }
      })
      .done();
  };
  modal2update = (item) => {
    const u_id = item;
    fetch("http://192.168.1.9:3000/update_bank", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: u_id,
        b_name: this.state.bankname,
        b_acc: this.state.bankacc,
        b_ifsc: this.state.ifsc,
        b_branch: this.state.bankbranch,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.success === true) {
          alert(res.message);
          this.setState({
            show1: false,
          });
        } else {
          alert("error");
        }
      })
      .done();
  };
  render() {
    // const { navigation } = this.props;
    // const value1 = navigation.getParam("u_id", "NO-User");
    return this.state.isLoading ? (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#ffad33" />
      </View>
    ) : (
      <View style={{ backgroundColor: "#ffffff" }}>
        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
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
                    <Text style={styles.header_text3}>User Details..</Text>
                  </DataTable.Title>
                </DataTable.Header>

                <DataTable.Row style={{ flex: 3 }}>
                  <DataTable.Cell>User_Id</DataTable.Cell>
                  <DataTable.Cell numeric>{item.User_id}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell>Name</DataTable.Cell>
                  <DataTable.Cell numeric>{item.name}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>DOB</DataTable.Cell>
                  <DataTable.Cell numeric>{item.dob}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Intro_Id</DataTable.Cell>
                  <DataTable.Cell numeric>{item.into_id}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Mobile_Number</DataTable.Cell>
                  <DataTable.Cell numeric>{item.mobile_number}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Adhar_Number</DataTable.Cell>
                  <DataTable.Cell numeric>{item.adhar_number}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell></DataTable.Cell>
                  <DataTable.Cell numeric>
                    <TouchableOpacity style={styles.btn} onPress={this.modal1}>
                      <Text style={styles.btn_text}>Edit</Text>
                    </TouchableOpacity>
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>

              <DataTable
                style={{
                  backgroundColor: "#ffffff",
                  marginTop: 20,
                  borderRadius: 8,
                  borderColor: "#000000",
                  borderWidth: 1,
                }}
              >
                <DataTable.Header style={{ color: "#ffffff" }}>
                  <DataTable.Title>
                    <Text style={styles.header_text3}>Bank Details..</Text>
                  </DataTable.Title>
                </DataTable.Header>

                <DataTable.Row style={{ flex: 3 }}>
                  <DataTable.Cell>Bank_Name</DataTable.Cell>
                  <DataTable.Cell numeric>{item.bank_name}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell>Branch</DataTable.Cell>
                  <DataTable.Cell numeric>{item.branch}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Acc_No</DataTable.Cell>
                  <DataTable.Cell numeric>{item.Acc_no}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>IFSC_code</DataTable.Cell>
                  <DataTable.Cell numeric>{item.ifsc_code}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell></DataTable.Cell>
                  <DataTable.Cell numeric>
                    <TouchableOpacity style={styles.btn} onPress={this.modal2}>
                      <Text style={styles.btn_text}>Edit</Text>
                    </TouchableOpacity>
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>

              <DataTable
                style={{
                  backgroundColor: "#ffffff",
                  marginTop: 20,
                  borderRadius: 8,
                  borderColor: "#000000",
                  borderWidth: 1,
                }}
              >
                <DataTable.Header style={{ color: "#ffffff" }}>
                  <DataTable.Title>
                    <Text style={styles.header_text3}>User Levels..</Text>
                  </DataTable.Title>
                </DataTable.Header>

                <DataTable.Row style={{ flex: 3 }}>
                  <DataTable.Cell>Level 1</DataTable.Cell>
                  <DataTable.Cell numeric>{item.level1}/4</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell>Level 2</DataTable.Cell>
                  <DataTable.Cell numeric>{item.level2}/16</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Level 3</DataTable.Cell>
                  <DataTable.Cell numeric>{item.level3}/64</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Level 4</DataTable.Cell>
                  <DataTable.Cell numeric>{item.level4}/256</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Level 5</DataTable.Cell>
                  <DataTable.Cell numeric>{item.level5}/1024</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Level 6</DataTable.Cell>
                  <DataTable.Cell numeric>{item.level6}/4096</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Level 7</DataTable.Cell>
                  <DataTable.Cell numeric>{item.level7}/16384</DataTable.Cell>
                </DataTable.Row>
              </DataTable>
              {/* Modal1 */}
              <Modal transparent={true} visible={this.state.show1}>
                <KeyboardAvoidingView
                  style={styles.wrapper}
                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                  <View
                    style={{
                      backgroundColor: "#000000aa",
                      flex: 1,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#fff",
                        margin: 30,
                        padding: 40,
                        borderRadius: 10,
                        flex: 1,
                      }}
                    >
                      <Text>Edit...</Text>
                      <TextInput
                        placeholder="Name"
                        onBlur={() => this.namevalidator()}
                        onChangeText={(text) => {
                          this.setState({
                            editname: text,
                          });
                        }}
                        // value={item.name}
                        style={styles.inputtypemodal}
                      />
                      <Text style={{ color: "red" }}>
                        {this.state.nameerror}
                      </Text>
                      {/* <TextInput
                        placeholder="Date"
                        onBlur={() => this.datevalidator()}
                        onChangeText={(text) => {
                          this.setState({
                            value: text,
                          });
                        }}
                        // value={item.dob}
                        style={styles.inputtypemodal}
                      /> */}
                      <Text style={{ color: "red" }}>
                        {this.state.dateerror}
                      </Text>
                      <TextInput
                        placeholder="Mobile Number"
                        Type="numeric"
                        onBlur={() => this.mobilevalidator()}
                        onChangeText={(text) => {
                          this.setState({
                            editnumber: text,
                          });
                        }}
                        // value={item.mobile_number}
                        style={styles.inputtypemodal}
                      />
                      <Text style={{ color: "red" }}>
                        {this.state.mobileerror}
                      </Text>

                      <TouchableOpacity
                        style={styles.btnmodal}
                        onPress={this.modal1update.bind(this, item.User_id)}
                      >
                        <Text style={styles.btn_text}>Save Change</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.btnmodal2}
                        onPress={this.back}
                      >
                        <Text style={styles.btn_text2}>Back</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </KeyboardAvoidingView>
              </Modal>
              {/* Modal2 */}

              <Modal transparent={true} visible={this.state.show2}>
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
                      <Text>Edit Bank Details..</Text>
                      <TextInput
                        placeholder="Bank Name"
                        onBlur={() => this.bankname()}
                        onChangeText={(text) => {
                          this.setState({
                            bankname: text,
                          });
                        }}
                        style={styles.inputtypemodal}
                      />
                      <Text style={{ color: "red" }}>
                        {this.state.banknameerr}
                      </Text>
                      <TextInput
                        placeholder="Branch"
                        onBlur={() => this.bankbranch()}
                        onChangeText={(text) => {
                          this.setState({
                            bankbranch: text,
                          });
                        }}
                        style={styles.inputtypemodal}
                      />
                      <Text style={{ color: "red" }}>
                        {this.state.bankbrancherr}
                      </Text>
                      <TextInput
                        placeholder="Acc_No"
                        onBlur={() => this.bankacc()}
                        onChangeText={(text) => {
                          this.setState({
                            bankacc: text,
                          });
                        }}
                        style={styles.inputtypemodal}
                      />
                      <Text style={{ color: "red" }}>
                        {this.state.bankaccerr}
                      </Text>
                      <TextInput
                        placeholder="IFSC_Code"
                        onBlur={() => this.ifsc()}
                        onChangeText={(text) => {
                          this.setState({
                            ifsc: text,
                          });
                        }}
                        style={styles.inputtypemodal}
                      />
                      <Text style={{ color: "red" }}>{this.state.ifscerr}</Text>
                      <TouchableOpacity
                        style={styles.btnmodal}
                        onPress={this.modal2update.bind(this, item.User_id)}
                      >
                        <Text style={styles.btn_text}>Save Change</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.btnmodal2}
                        onPress={this.back}
                      >
                        <Text style={styles.btn_text2}>Back</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </KeyboardAvoidingView>
              </Modal>
            </ScrollView>
          )}
        />
      </View>
    );
  }
}
export default HomeScreen2;
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
