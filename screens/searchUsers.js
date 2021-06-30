import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { ListItem, SearchBar } from "react-native-elements";

class searchUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const url = `http://192.168.1.9:4549/users`;
    this.setState({ loading: true });

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = res;
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  };

  // renderSeparator = () => {
  //   return (
  //     <View
  //       style={{
  //         height: 1,
  //         width: "86%",
  //         backgroundColor: "#CED0CE",
  //         marginLeft: "14%",
  //       }}
  //     />
  //   );
  // };

  searchFilterFunction = (text) => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter((item) => {
      const itemData = `${item.Customer_Id.toUpperCase()} ${item.Name.toUpperCase()} ${item.Name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        containerStyle={{
          backgroundColor: "#ffff80",
          borderBottomColor: "#ffff80",
          borderTopColor: "#ffff80",
        }}
        inputStyle={{ backgroundColor: "#ffffff" }}
        inputContainerStyle={{ backgroundColor: "#ffffff", borderRadius: 15 }}
        onChangeText={(text) => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            // <ListItem
            //   title={`${item.Customer_Id} ${item.Name}`}
            //   subtitle={item.Gender}
            // />
            <View style={styles.box}>
              <Text style={styles.text}>{item.Customer_Id}</Text>
              <Text>{item.Name}</Text>
              <Text>{item.Gender}</Text>
            </View>
          )}
          keyExtractor={(item) => item.Customer_Id}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

export default searchUsers;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "#000000",
    fontSize: 20,
  },
  box: {
    backgroundColor: "#ffffff",
    padding: 10,
    margin: 10,
    borderRadius: 8,
    borderColor: "#000000",
    borderWidth: 1,
    // marginTop:50
  },
  text: {
    fontWeight: "bold",
    color: "#000000",
    fontSize: 20,
  },
});
