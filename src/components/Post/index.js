import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

const Post = ({ title, author, text }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>{author}</Text>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 5,
    padding: 20,
  },
  title: {
    fontSize: 16,
    color: '#212121',
    fontWeight: 'bold',
  },
  author: {
    color: '#9e9e9e',
    fontSize: 12,
  },
  text: {
    color: '#616161',
    marginTop: 15,
  },
});

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Post;
