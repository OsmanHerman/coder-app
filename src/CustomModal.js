import { View, Text, Modal, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const CustomModal = ({setIsModalVisible, isModalVisible, clearList}) => {
  return (
    <Modal transparent={true} visible={isModalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              ¿Está seguro que desea borrar todo?
            </Text>
            <View  style={styles.containerButton}>
              <Pressable onPress={() => clearList()}>
                <Text style={styles.textButton}>SI</Text>
              </Pressable>
              <Pressable onPress={() => setIsModalVisible(false)}>
                <Text style={styles.textButton}>NO</Text>
              </Pressable>
            </View>
          </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 22,
      },
    
      modalView: {
        backgroundColor: 'black',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
      },
      
      modalText: {
        color: 'white',
        marginBottom: 15,
        textAlign: 'center',
      },
    
      textButton: {
        color: 'white',
        marginHorizontal: 5,
        textAlign: 'center',
      },
    
      containerButton: {
        flexDirection: 'row',
        columnGap: 20, 
        alignItems: 'center',
      },
})

export default CustomModal