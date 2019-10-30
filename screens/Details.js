import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function DetailsScreen({navigation}) {
  const user = navigation.getParam('user');
  const title = navigation.getParam('title');
  const body = navigation.getParam('body');
  const name = navigation.getParam('name');
  console.log(name);
  return (
    <View style={styles.container}>
      <Text> {user} </Text>
      <Text> {title} </Text>
      <Text> {body} </Text>
      <Text> {name} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DetailsScreen;
