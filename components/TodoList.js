import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TodoList = ({ singleTodoData, onRemove }) => {
  return (
    <TouchableOpacity onPress={() => onRemove(singleTodoData.id)} activeOpacity={.3}>
      <View style={styles.wrapper}>
        <Text style={styles.todoText}>{singleTodoData.name}</Text>
      </View>
    </TouchableOpacity>
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
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  todoText: {
    color: '#030F29',
    fontSize: 15,

  },
})