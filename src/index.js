import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView,
} from 'react-native';

import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';

import Post from '~/components/Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        title: 'Aprendendo React Native',
        author: 'Gustavo H. Michels',
        text:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae suscipit culpa magni iste molestiae! Facilis veritatis temporibus, alias animi similique odio magnam accusamus blanditiis, neque nam tempore minima suscipit voluptate?',
      },
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Gustavo H. Michels',
        text:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae suscipit culpa magni iste molestiae! Facilis veritatis temporibus, alias animi similique odio magnam accusamus blanditiis, neque nam tempore minima suscipit voluptate?',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Gustavo H. Michels',
        text:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae suscipit culpa magni iste molestiae! Facilis veritatis temporibus, alias animi similique odio magnam accusamus blanditiis, neque nam tempore minima suscipit voluptate?',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Gustavo H. Michels',
        text:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae suscipit culpa magni iste molestiae! Facilis veritatis temporibus, alias animi similique odio magnam accusamus blanditiis, neque nam tempore minima suscipit voluptate?',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <>
        <View style={styles.header}>
          <Text style={styles.title}>GoNative App</Text>
        </View>
        <ScrollView style={styles.container}>
          {posts.map(post => (
            <Post key={post.id} title={post.title} author={post.author} text={post.text} />
          ))}
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#ee7777',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#212121',
  },
});
