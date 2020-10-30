/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, View, Image } from 'react-native';

export default function LognInButton({ onPress, title, backgroundColor, titleColor, icon }) {
  const titleStyle = { color: titleColor };
  const backgroundStyle = { backgroundColor: backgroundColor };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, backgroundStyle]}>
      <Image style={styles.image} source={icon} />
      <Text> </Text>
      <Text style={[styles.textButton, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: 'orange',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    width: Dimensions.get('window').width - 80,
    flexDirection: 'row',
    padding: 16,
  },
  textButton: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 20,
    height: 20,
  },
});
