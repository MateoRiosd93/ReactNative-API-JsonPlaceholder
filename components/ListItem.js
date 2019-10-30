import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.texto}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    borderBottomColor: '#EEE',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
  },
  texto: {
    fontSize: 18,
  },
});
