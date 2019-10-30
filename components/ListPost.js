import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default ({onPress, user, title, body}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.user}>{user}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    paddingBottom: 4,
    justifyContent: 'center',
    borderBottomColor: '#EEE',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
  },
  user: {
    fontSize: 18,
    color: 'black',
    fontWeight: '900',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
  },
  body: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
