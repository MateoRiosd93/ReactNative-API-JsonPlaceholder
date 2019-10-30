import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ListPost from '../components/ListPost';

function PostsScreen({navigation}) {
  const userId = navigation.getParam('user_id');
  const userName = navigation.getParam('name');
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setPosts(data.filter(x => x.userId === userId));
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Cargando ...</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={posts}
          keyExtractor={x => String(x.id)}
          renderItem={({item}) => (
            <ListPost
              onPress={() =>
                navigation.navigate('Details', {
                  user: item.userId,
                  title: item.title,
                  body: item.body,
                  name: userName,
                })
              }
              key={item.userId}
              user={item.userId}
              title={item.title}
              body={item.body}
            />
          )}
        />
      )}
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

export default PostsScreen;
