import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAwareScrollView, Image, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Signup() {
    const navigation = useNavigation();
    const signinPress = () => {
        navigation.navigate('Main')
    }
    const [fullname, setFullName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');


    const registerUser = async (fullname, phoneNo, Email, Password, ConfirmPassword) => {
        try {
            if (!fullname || !phoneNo || !Email || !Password || !ConfirmPassword) {
                console.log("Please fill in all the required fields");
                return;
            }

            await AsyncStorage.setItem('Full Name', fullname);
            await AsyncStorage.setItem('Phone No', phoneNo);
            await AsyncStorage.setItem('Email', Email);
            await AsyncStorage.setItem('Password', Password);

            console.warn("Registration successful");
            navigation.navigate('Main');
        } catch (error) {
            console.log('Error during registration:', error);
        }
    };


    return (
        <View style={{ padding: 15, flex: 1, backgroundColor: '#4682B4' }}>
            {/* <KeyboardAwareScrollView> */}
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 30, fontWeight: 'bold', alignSelf: 'center', marginTop: 100 }}>Sign UP</Text>
            <Text style={{ textAlign: 'left', color: 'white', marginHorizontal: 3, marginVertical: 5 }} >Full Name </Text>
            <TextInput
                style={{ textAlign: 'center', borderRadius: 8, backgroundColor: '#fff', borderWidth: 1, borderColor: 'lightblue' }}
                placeholder="Enter your Full Name" value={fullname}
                onChangeText={text => setFullName(text)}
            />
            <Text style={{ textAlign: 'left', color: 'white', marginVertical: 5, marginHorizontal: 3 }} >Phone No          </Text>
            <TextInput
                style={{ textAlign: 'center', borderRadius: 8, backgroundColor: '#fff', borderWidth: 1, borderColor: 'lightblue' }}
                placeholder="Enter your Phone No" value={phoneNo}
                onChangeText={text => setPhoneNo(text)}
            />
            <Text style={{ textAlign: 'left', color: 'white', marginVertical: 5, marginHorizontal: 3 }} >Email       </Text>
            <TextInput
                style={{ textAlign: 'center', borderRadius: 8, backgroundColor: '#fff', borderWidth: 1, borderColor: 'lightblue' }}
                placeholder="Enter your Email" value={Email}
                onChangeText={text => setEmail(text)}
            />
            <Text style={{ textAlign: 'left', color: 'white', marginVertical: 5, marginHorizontal: 3 }} >Password          </Text>
            <TextInput
                style={{ textAlign: 'center', borderRadius: 8, backgroundColor: '#fff', borderWidth: 1, borderColor: 'lightblue' }}
                placeholder="Enter Your Password" value={Password} onChangeText={text => setPassword(text)} secureTextEntry={true}
            />
            <Text style={{ textAlign: 'left', color: 'white', marginVertical: 5, marginHorizontal: 3 }} >Confirm Password      </Text>
            <TextInput
                style={{ textAlign: 'center', borderRadius: 8, backgroundColor: '#fff', borderWidth: 1, borderColor: 'lightblue' }}
                placeholder="Confirm Your Password"
                value={ConfirmPassword} onChangeText={text => setConfirmPassword(text)}
                secureTextEntry={true}
            />
            <TouchableOpacity activeOpacity={0.9} onPress={() => registerUser(fullname, phoneNo, Email, Password, ConfirmPassword)}>
  <Text style={{ textAlign: 'center', borderRadius: 20, backgroundColor: 'white', marginTop: 30, marginHorizontal: 20, paddingVertical: 15, fontSize: 16 }}>REGISTER</Text>
</TouchableOpacity>

            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', flexDirection: 'row' }}>
                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', marginRight: 5, fontSize: 16 }} >Have an Account? </Text>
                <TouchableOpacity onPress={signinPress}>
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 18 }} >Sign in </Text>
                </TouchableOpacity>
            </View>



        {/* </KeyboardAwareScrollView> */}
</View>
    );

}

