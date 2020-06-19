import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/header';
import ListItem from './components/listItem';
import AddItem from './components/addItem';

const App = () => {

  const generateRandomNumber = () => {
    var randNumber = Math.floor(Math.random() * 999999) +1;
    return randNumber;
  }

  const [items, setItems] = useState([
    {id: generateRandomNumber(), text: 'Milk'},
    {id: generateRandomNumber(), text: 'Egg'},
    {id: generateRandomNumber(), text: 'Bread'},
    {id: generateRandomNumber(), text: 'Juice'}
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {
    if (text) {
      setItems(prevItems => {
        return [{id: generateRandomNumber(), text}, ...prevItems]
      });
    }
  }

  return (
    <View style={styles.container}>
      <Header title='Shopping List'/>
      <AddItem addItem={addItem}/>
      <FlatList 
        data={items} 
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/> } 
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  }
})

export default App;