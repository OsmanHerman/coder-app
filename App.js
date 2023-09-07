import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, View,
  Pressable, 
  Image, FlatList
 } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AddItem from './src/AddItem';
import ListItem from './src/ListItem';
import CustomModal from './src/CustomModal';

export default function App() {

  const initialState = []
  const [text, setText] = useState("")
  const [list, setList] = useState(initialState)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addItem = () => {
    list.push({
      id: Math.random(), 
      text: text,
      });
    setList(list);
    setText("");
  };

  const clearList = () => {
    setList([]);
    setIsModalVisible(false);
  }

  return (
    <View style={styles.container}>

      <Image style={styles.img} source={{uri: 'https://img.icons8.com/external-outline-icons-pause-08/64/000000/external-check-management-outline-icons-pause-08.png'}}/>
      
      <Text style={styles.tittle}>Lista de compras</Text>
      
      <AddItem text={text} setText={setText} addItem={addItem}/>

      <FlatList 
      data={list} 
      keyExtractor={item => item.id}
      renderItem={({item}) => <ListItem item={item}/>}>
      </FlatList>

      <CustomModal setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} clearList={clearList} />

      <Pressable onPress={() => setIsModalVisible(true)}>
        <Ionicons name="ios-trash-outline" size={40} color="red" />
      </Pressable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    rowGap: 20,
  },

  img: {
    width: 120,
    height: 120,
    marginTop: 50,
  },

  tittle: {
    fontSize: 30,
    borderBottomColor: 'red',
    borderBottomWidth: 5,
  },
});
