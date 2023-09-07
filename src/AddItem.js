import { View, TextInput, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons';

const AddItem = ({text, setText, addItem}) => {
  return (
    <View style={styles.buttonContainer}>
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.input} 
            placeholder='Agregue un ítem...'
            value={text}
            onChangeText={(value) => setText(value)}/>
        </View>

        <Pressable onPress={() => addItem()}>
            <Octicons name="diff-added" size={40} color="red" />
        </Pressable>
  </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        columnGap: 10,
        marginTop: 20,
    },
    
    input: {
        width: 200,
        padding: 5,
        fontSize: 20,
    },
    
    inputContainer: {
        borderColor: 'red',
        borderWidth: 1,
    },
});

export default AddItem