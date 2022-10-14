import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import { StatusBar } from 'expo-status-bar'
import TodoList from './components/TodoList'

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [todoData, setTodoData] = useState([]);
  console.warn(todoData)

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.todoModalBtn}>
          <TouchableOpacity onPress={() => setOpenModal(true)} style={styles.touchableButton}>
            <Text style={styles.buttonText}>Add Todo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todoList}>

          <FlatList data={todoData} renderItem={({ item }) => <TodoList name={item.name} />} />
        </View>
        {openModal && <TodoInput onOpenModal={setOpenModal} onSetTodo={setTodoData} />}
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#311B6C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoModalBtn: {
    flex: 1,
  },
  touchableButton: {
    backgroundColor: '#F21385',
    padding: 10,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  todoList: {
    flex: 7,
    width: '100%',
  },
})