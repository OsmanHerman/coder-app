import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ListItem = ({item}) => {
  return (
    <View>
      <Text style={styles.itemList}>• {item.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    itemList: {
        width: 247,
        fontSize: 20,
    },
});

export default ListItem