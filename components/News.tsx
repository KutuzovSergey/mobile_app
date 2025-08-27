import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Linking, Image } from 'react-native';

import { ArticleType } from "../type/typesMain";

export function News(props: { data: ArticleType }) {

  const stripHtml = (html: string) => html.replace(/<[^>]+>/g, '');

  const extractImageSrc = (html: string): string | null => {
    const match = html.match(/<img[^>]+src="([^">]+)"/i);
    return match ? match[1] : null;
  }

  const imageUrl = extractImageSrc(props.data.content.rendered);
  // console.log(props.data);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => Linking.openURL(props.data.link)} >
      <Text style={styles.title}>{stripHtml(props.data.title.rendered)}</Text>

      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      ) : (
        <Text>Изображение не найдено</Text>
      )}

      <Text style={styles.date}>{new Date(props.data.date).toLocaleDateString()}</Text>
      <Text style={styles.excerpt}>{stripHtml(props.data.excerpt.rendered)}</Text>
    </TouchableOpacity>
  );
} 

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    color: '#888',
    fontSize: 12,
    marginVertical: 4,
  },
  excerpt: {
    fontSize: 14,
    color: '#333',
  },
  image: {
    width: 300,
    height: 200,
  }
});
