import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";
// import { MenuProvider } from 'react-native-popup-menu';
// import {
//   Menu,
//   MenuOptions,
//   MenuOption,
//   MenuTrigger,
// } from 'react-native-popup-menu';
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";

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
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { ListItem, SearchBar } from "react-native-elements";

class MessagesList extends React.Component {
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
    const url = "http://192.168.1.9:3000/message";
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          datasource: responseJson,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /////////
  nextscreen = (item) => {
    this.props.navigation.navigate("Chat", { id: item });
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={this.nextscreen.bind(this, item.from_id)}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            margin: 10,
            backgroundColor: "#ffffff",
            marginBottom: 3,

            borderRadius: 8,
            borderColor: "#fff",
            borderWidth: 2,
          }}
        >
          <Image
            style={{ width: 70, height: 70, margin: 5, borderRadius: 70 }}
            source={require("../assets/userava3.png")}
          />
          <View style={{ flex: 1, justifyContent: "center", marginLeft: 5 }}>
            <Text style={{ fontSize: 16, color: "#000000", marginBottom: 15 }}>
              {item.from_id}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return this.state.isLoading ? (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#ffad33" />
      </View>
    ) : (
      <View style={styles.container}>
        <View style={styles.header1}>
          <Text style={styles.header_text}>Messages</Text>
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
          renderItem={this.renderItem}
          keyExtractor={(item) => item.msg_id.toString()}

          // ItemSeparatorComponent={this.renderSeparator}
          // ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}
class Chat extends React.Component {
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
    this.getdata();
  }
  getdata = () => {
    const url = "http://192.168.1.9:3000/message";
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          datasource: responseJson,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  renderItem = ({ item }) => {
    return (
      <ScrollView>
        <View
          style={{
            marginVertical: 10,
            margin: 10,
            alignSelf: "flex-end",
            maxWidth: 250,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            borderBottomLeftRadius: 25,
            backgroundColor: "#00b386",
          }}
        >
          <Text style={{ fontSize: 18 }}>{item.msg}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            maxWidth: 250,
            fontSize: 13,
            alignItems: "center",
            marginHorizontal: 15,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            borderBottomRightRadius: 25,
            backgroundColor: "#f2f2f2",
          }}
        >
          <Text style={{ fontSize: 18 }}>{item.msg}</Text>
          {/* <Text style={{ fontSize: 18 }}>
          gwasgduyasgbasjchduifhscjkasiscuscusdiucsc ascoasjcsojdc ajsxoascjasj
        </Text> */}
        </View>
      </ScrollView>
    );
  };
  render() {
    const { navigation } = this.props;
    const id = navigation.getParam("id", "NO-User");
    return (
      <View style={styles.container2}>
        <View style={styles.chatcontainer}>
          <Image
            source={require("../assets/userava3.png")}
            style={styles.avatarStyle}
          />
          <Text style={styles.nameStyle}>{id}</Text>
          <TouchableOpacity style={styles.nameStyle2}>
            <FontAwesome5 name="ellipsis-v" color="#000" size={20} />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={this.state.datasource}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.msg_id.toString()}

            // ItemSeparatorComponent={this.renderSeparator}
            // ListHeaderComponent={this.renderHeader}
          />
        </View>

        <View style={styles.msgcontainer}>
          {/* <Entypo name='emoji-happy' color='#fff' size={20}/> */}
          <View style={styles.input}>
            <TextInput
              placeholder="Some text"
              multiline={true}
              // style={styles.input}
            />
            <TouchableOpacity style={styles.nameStyle3}>
              <FontAwesome5 name="paper-plane" color="#000000" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    // Main: MessagesList,
    // Profile: ProfileScreen,
    // headerMode: "none",
    Home: {
      screen: MessagesList,
      navigationOptions: {
        // title: "Manage Product",
        headerMode: "none",
        headerShown: false,
      },
    },
    Chat: {
      screen: Chat,
      navigationOptions: {
        // title: "Manage Product",
        headerMode: "none",
        headerShown: false,
      },
    },
  },

  {
    headerMode: "none",
    initialRouteName: "Home",
  }
);

export default createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e6e6e6",
  },
  container2: {
    flex: 1,
    // justifyContent: "center",
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
  header_text: {
    fontSize: 20,
    textAlign: "left",
    // fontWeight: "bold",
    // justifyContent: "center",
    color: "#000000",
    padding: 10,
    letterSpacing: 10,
    fontFamily: "sans-serif",
  },
  header1: {
    backgroundColor: "#ffff80",
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
    marginLeft: 400,
    width: 400,
    flexDirection: "row",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,

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
  chatcontainer: {
    flexDirection: "row",
    backgroundColor: "#ffff80",
    alignItems: "center",
  },

  avatarStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginTop: 5,
    marginLeft: 5,

    // alignItems: "right",
  },
  nameStyle: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 11,
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 5,
  },
  nameStyle2: {
    marginTop: 12,
    flex: 1,
    margin: 10,
    alignItems: "flex-end",
  },
  nameStyle3: {
    // marginTop: 12,
    flex: 1,
    // margin: 10,
    alignItems: "flex-end",
  },
  msgcontainer: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    // width: "97%",
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    // borderRadius: 30,
    borderColor: "#000",
    // borderWidth: 1,
  },
  input: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    width: "95%",
    // position: "absolute",
    // bottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
