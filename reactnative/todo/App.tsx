import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, FlatList, TouchableOpacity, View } from 'react-native';

import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [activeBtn, setActiveBtn] = useState('black');
  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter(counter + 1);
  }
  function decreaseCounter() {
    setCounter(counter - 1);
  }
  const confirmHandler = () => {
    setActiveBtn('orange');
  };
  const endHandler = () => {
    setActiveBtn('black');
  };

  function handleAddTask() {
    setTaskItems([...taskItems, task]);
    setTask(null);
  }
  const completeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top_side}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Yapılacaklar</Text>
          <Text style={styles.headerText}>({counter})</Text>
        </View>
        <View>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity
                onLongPress={() => [completeTask(), decreaseCounter()]}>
                <Task key={index} text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={styles.task_container}>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Ara..."
            style={styles.textInput}
            placeholderTextColor="gray"
            value={task}
            onChangeText={text => [setTask(text), confirmHandler()]}
          />
          <TouchableOpacity
            style={[styles.button, {backgroundColor: activeBtn}]}
            onPress={() => [handleAddTask(), endHandler(), increaseCounter()]}>
            <Text style={styles.buttonTitle}>Kaydet</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#102126',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 20,
    justifyContent: 'space-between',
    borderWidth: 1,
    height: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
    paddingVertical: 15,
  },
  headerText: {
    color: '#d99006',
    fontWeight: 'bold',
    fontSize: 24,
  },
  task_container: {
    marginBottom: 20,
  },

  inputBox: {
    backgroundColor: '#37464e',
    margin: 8,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  textInput: {
    color: 'white',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '100%',
    height: 40,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: '100%',
    borderRadius: 5,
    height: 40,
    marginBottom: 10,
    backgroundColor: 'orange',
  },
  buttonTitle: {color: '#fff'},
});
