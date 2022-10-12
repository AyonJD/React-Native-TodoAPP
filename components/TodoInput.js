import { Button, StyleSheet, Text, TextInput, View, Modal } from 'react-native'
import React from 'react'

const TodoInput = () => {
    return (
        <Modal animationType='slide'>
            <View style={styles.wrapper}>
                <View style={styles.inputSectionWrapper}>
                    <View>
                        <TextInput style={styles.input} placeholder="Add Todo" />
                    </View>
                    <View style={styles.flexButton}>
                        <View style={styles.button}>
                            <Button title="Add Todo" />
                        </View>
                        <View style={styles.button}>
                            <Button title="Cancel" color={'#F21385'} />
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
    },
    inputSectionWrapper: {
        width: '90%'
    },
    input: {
        width: '100%',
        borderColor: '#000',
        borderWidth: 1,
        padding: 8,
        borderRadius: 5,
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