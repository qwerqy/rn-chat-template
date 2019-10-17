import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const Main = () => {
  const [value, onChangeText] = React.useState("Useless Placeholder");
  return (
    <View style={styles.mainContainer}>
      <View style={styles.loginContainer}>
        <View style={styles.textInputContainer}>
          <Text>Name:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => onChangeText(text)}
            value={value}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text>Password:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => onChangeText(text)}
            value={value}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Button title={"Login"} onPress={() => {}} />
          <Button title={"Signup"} onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default Main;

const offset = 20;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 20,
    justifyContent: "center"
  },
  textInput: {
    height: 40,
    width: "100%",
    paddingHorizontal: 2,
    borderColor: "#111111",
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0
  },
  textInputContainer: {
    marginVertical: 10
  },
  loginContainer: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 25
  }
});
