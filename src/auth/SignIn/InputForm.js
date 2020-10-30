/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function InputForm({ phone, onChangeText }) {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>Email ID</Text>
            <TextInput
                placeholder="Enter your email here!"
                style={styles.textInput}
                keyboardType="email-address"
                onChangeText={onChangeText}
            />
            <Text style={styles.title}>Password</Text>
            <TextInput
                placeholder="Enter your password here!"
                style={styles.textInput}
                keyboardType="visible-password"
                onChangeText={onChangeText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
        borderRadius: 4,
        marginTop: 10,
        height: 50,
        fontSize: 18,
        padding: 10,
    },
    title: {
        fontSize: 20,
        marginTop: 20,
    },
    mainContainer: {
        marginHorizontal: 15,
    },
});
