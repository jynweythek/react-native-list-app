import {StyleSheet, TextInput, Button, View, Alert} from "react-native";
import {useState} from "react";

export const AddTodo = ({onSubmit}) => {
  const [value, setValue] = useState("");
  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      Alert.alert("Todo name can't be empty")
    }

  }

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Enter todo name..."
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button title="Add" onPress={pressHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
    marginBottom: 15

  },
  input: {
    width: "80%",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#3949ab",
    padding: 10,
  }
})
