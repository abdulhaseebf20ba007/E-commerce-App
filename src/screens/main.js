import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Main() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signupPress = () => {
        navigation.navigate('Signup')
    }

    const Loginpress = async () => {
        try {
            const storedEmail = await AsyncStorage.getItem('Email');
            const storedPassword = await AsyncStorage.getItem('Password');

            if (email === storedEmail && password === storedPassword) {

                navigation.navigate('Home');
            } else {

                Alert.alert('Error', 'Invalid email or password');
            }
        } catch (error) {
            console.log('Error during sign-in:', error);
        }
    };

    return (
        <View style={{ padding: 15, flex: 1, backgroundColor: '#4682B4' }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 30, fontWeight: 'bold', alignSelf: 'center', marginVertical: 100 }}>Sign in</Text>
            <Text style={{ textAlign: 'left', color: 'white', marginHorizontal: 3, marginVertical: 5 }} >Email

            </Text>
            <TextInput
                style={{ textAlign: 'center', borderRadius: 8, backgroundColor: '#fff', borderWidth: 1, borderColor: 'lightblue' }}
                placeholder="Enter your Email" value={email}
                onChangeText={text => setEmail(text)}
            />
            <Text style={{ textAlign: 'left', color: 'white', marginVertical: 5, marginHorizontal: 3 }} >Password

            </Text>

            <TextInput
                style={{ textAlign: 'center', borderRadius: 8, backgroundColor: '#fff', borderWidth: 1, borderColor: 'lightblue' }}
                placeholder="*******" onChangeText={text => setPassword(text)}
                secureTextEntry={true}
            />
            <Text style={{ textAlign: 'right', color: 'white', margin: 3 }} >Forget Password

            </Text>
            <TouchableOpacity onPress={Loginpress} activeOpacity={0.9}>
                <Text style={{ textAlign: 'center', borderRadius: 20, backgroundColor: 'white', marginTop: 30, marginHorizontal: 20, paddingVertical: 15, fontSize: 16 }}>LOGIN</Text>
            </TouchableOpacity >

            <Text style={{ textAlign: 'center', color: 'white', marginVertical: 30, fontWeight: 'bold' }} > OR </Text>
            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 20 }} >Sign in with  </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/145/145802.png' }} style={{ height: 36, width: 36 }} />
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/356/356025.png' }} style={{ height: 36, width: 36, marginLeft: 8 }} />
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', flexDirection: 'row' }}>
                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', marginRight: 5, fontSize: 16 }} >Don't have an Account? </Text>
                <TouchableOpacity onPress={signupPress}>
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 18 }} >Signup </Text>
                </TouchableOpacity>
            </View>



        </View>

    );
}

export default Main;
