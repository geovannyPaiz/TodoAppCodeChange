import React from "react";
import { StyleSheet, View, FlatList, Button, Text } from "react-native";

const taskList = [
  {
    id: 1,
    nombre: "task 1",
  },
  {
    id: 2,
    nombre: "task 2",
  },
  {
    id: 3,
    nombre: "task 3",
  },
  {
    id: 4,
    nombre: "task 4",
  },
  {
    id: 5,
    nombre: "task 5",
  },
];

export default function HomeScreen({ navigation }) {
  const deleteTask = (id) => {
    taskList = taskList.filter((element) => element.id !== id);
  };

  const Item = (title, id) => {
    return (
      <View>
        <Text>{title}</Text>
        <Button title={"Delete task"} onPress={() => deleteTask(id)} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Here add your Code for Task List and button to navigate to add new tasks, also remember todo's should be able to be deleted. */}
      {/* <FlatList
        data={[]}
        renderItem={({ item }) => <Item title={item.nombre} id={item.id} />}
        keyExtractor={(item) => item.id}
      /> */}
      {taskList.map((element) => (
        <Item title={element.nombre} id={element.id} />
      ))}
      <Button title="Add task" onPress={() => navigation.navigate("AddTask")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
