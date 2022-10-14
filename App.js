import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import { StatusBar } from 'expo-status-bar'
import TodoList from './components/TodoList'

const App = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => setOpenModal(true)} style={styles.touchableButton}>
            <Text style={styles.buttonText}>Add Todo</Text>
          </TouchableOpacity>
        </View>
        {openModal && <TodoInput onOpenModal={setOpenModal} />}
        <TodoList />
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#311B6C',
    alignItems: 'center',
    justifyContent: 'center',
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
})