import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoInput from './components/TodoInput'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <TodoInput />
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
  }
})