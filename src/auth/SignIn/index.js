import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native'
import InputForm from '../SignIn/InputForm';
import LognInButton from '../../components/LognInButton';

export default function SignInScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>
                <Text style={styles.title}>Sign In</Text>
                <InputForm />
                <View style={styles.forgotPwContainer}>
                    <TouchableOpacity >
                        <Text style={styles.forgotPassword}>For got password?</Text>
                    </TouchableOpacity>
                </View>
                <LognInButton style={styles.loginButon}
                    title="Sign In"
                    titleColor="white"
                    backgroundColor="orange"
                    onPress={() => Alert.alert('Logn In!!!')}
                />
                <Text style={styles.signinWith}>Or sign in with</Text>
                <View style={styles.loginWithButton}>
                    <LognInButton
                        title="Google"
                        titleColor="black"
                        backgroundColor="white"
                        icon={require('../../assets/LogInImage/googleIcon.png')}
                    />
                    <View style={styles.fake} />
                    <LognInButton
                        title="Facebook"
                        titleColor="white"
                        backgroundColor="#4a6ea8"
                        icon={require('../../assets/LogInImage/fbIcon.png')}
                    />
                </View>
                <View style={styles.notYet}>
                    <Text>Not yet a member?</Text>
                    <TouchableOpacity style={styles.notButon}>
                        <Text style={styles.signUp} >Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <Text>Commit first</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        marginTop: 36,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    loginWithButton: {
        flexDirection: 'row',
    },
    notYet: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 40,
    },
    fake: {
        width: 10,
    },
    notButon: {
        marginStart: 4,
    },
    signUp: {
        color: 'orange',
        fontWeight: 'bold',
    },
    forgotPwContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingVertical: 10,
    },
    forgotPassword: {
        fontWeight: 'bold',
        color: 'orange',
        fontSize: 18,
        marginBottom: 20,
        marginRight: 15,
    },
    signinWith: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 18,
    },
    loginButon: {
        paddingBottom: 50,
        paddingTop: 40,
    },
    scroll: {
        padding: 24,
    },
});

