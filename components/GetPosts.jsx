import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function GetPosts() {
  const [posts, setPosts] = useState([]);
  const [isPost, setIsPosts] = useState(false);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      await sleep(1000); 
    //   console.log(data);
      setPosts(data);
      setIsPosts(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

  useEffect(() => {
    fetchPosts();
    console.log("amit")
  }, []);
  console.log(posts)
  console.log("hello chadda")
  
  return (
    <View style={styles.container}>
      {isPost ? (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.post}>
              <Text style={styles.title}>{item.id}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>
          )}
          ItemSeparatorComponent={<View style={{height:16}}></View>}
          ListEmptyComponent={<Text> no data found</Text>}
          ListHeaderComponent={<Text style={styles.textCenter}> All post lists</Text>}
          ListFooterComponent={<Text style={styles.textCenter}>End</Text>}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  post: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    color: '#333',
  },
  textCenter: {
    textAlign: 'center',
    margin: 5,
    fontWeight: 'bold',
    fontSize: 18,
  }
});
