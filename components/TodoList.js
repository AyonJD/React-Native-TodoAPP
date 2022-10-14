import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TodoList = ({name}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.todoText}>{name}</Text>
    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#000',
    paddingVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  todoText: {
    color: '#fff',
    fontSize: 15,

  },
})