import { Button, StyleSheet, Text, TextInput, View, Modal } from 'react-native'
import React, { useState } from 'react'

const TodoInput = ({ onOpenModal, onSetTodo }) => {
    const [todoInput, setTodoInput] = useState('');

    const handleSetTodoData = () => {
        onSetTodo(prev => [...prev, { name: todoInput, id: (Math.random() + 1).toString(36).substring(7) }]);
        setTodoInput('');
        onOpenModal(false);
    }

    return (
        <Modal animationType='slide'>
            <View style={styles.wrapper}>
                <View style={styles.inputSectionWrapper}>
                    <View>
                        <TextInput onChangeText={setTodoInput} style={styles.input} placeholder="Add Todo" placeholderTextColor={'gray'} />
                    </View>
                    <View style={styles.flexButton}>
                        <View style={styles.button}>
                            <Button onPress={() => handleSetTodoData()} title="Add Todo" />
                        </View>
                        <View style={styles.button}>
                            <Button onPress={() => onOpenModal(false)} title="Cancel" color={'#F21385'} />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default TodoInput

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#311B6C'
    },
    inputSectionWrapper: {
        width: '90%'
    },
    input: {
        width: '100%',
        borderColor: '#fff',
        borderWidth: 1,
        padding: 8,
        borderRadius: 5,
        color: '#fff'
    },
    button: {
        width: '40%',
    },
    flexButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
})