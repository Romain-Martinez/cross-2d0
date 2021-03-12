import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.circular}></View>
        <TouchableOpacity onPress={() => props.complete()} style={styles.circular}>
          <Text style={styles.WhiteDelete}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#7AC4B6',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: 'yellow',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 45,
    height: 20,
    borderColor: '#3d5afe',
    backgroundColor: '#3d5afe',
    borderWidth: 2,
    borderRadius: 5,
  },
  wrapper: {
    flexDirection: 'row'
  },
  WhiteDelete: {
    color: 'white',
  }

});

export default Task;