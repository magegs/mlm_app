import React, { Component } from "react";
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
  Button,
} from "react-native";
import * as Print from "expo-print";
import { Constants } from "expo";

const htmlString = `
<html>
  <head>
    <meta charset="utf-8" />
    <title>My Birth Letter</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0"
    />

    <style type="text/css">
      .section {
        height: 500px;
        background: gray;
        margin-bottom: 100px;
        display: inline-block;
        width: 100%;
      }
      
      th, td {
          padding: 15px;
          text-align: left;
         }
    </style>
  </head>

  <body>
   

    <table style="width:100%;">
      
      <tr>
        <td>Mobile</td>
        <td>:</td>
        <td>7397028873</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
    </table>
  </body>
</html>
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: "",
      datasource: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const { navigation } = this.props;
    const cate = navigation.getParam("data", "NO-User");
    fetch("http://192.168.1.9:3000/pdf")
      .then((response) => response.json())
      .then((res) => {
        if (res.success === false) {
          alert(res.message);
          this.setState({
            isLoading: false,
          });
        } else {
          alert("fectte");
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
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          // renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={styles.box}>
                <Button
                  title="Print HTML"
                  onPress={() =>
                    Print.printAsync({
                      html: htmlString,
                      height: 842,
                      width: 595,
                    })
                  }
                />
                {/* <Text style={styles.text}>{item.product_id}</Text>
                <Text>{item.product_name}</Text> */}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
