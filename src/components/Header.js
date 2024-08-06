import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Header = ({ title }) => {
  const navigation = useNavigation();
  const cartItems = useSelector((state) => state.cart);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', alignItems: 'center' }}>
      <TouchableOpacity>
        <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'black', padding: 5 }}>{`<`}</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 30, color: 'black', padding: 5 }}>{title}</Text>
      <TouchableOpacity onPress={() => { navigation.navigate('Wishlist') }}>
      <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4379/4379925.png' }} style={{ marginRight: 15, height: 35, width: 35 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate('Cartscreen') }}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/263/263142.png' }} style={{ marginRight: 15, height: 35, width: 35 }} />
        {totalQuantity > 0 && (
          <View style={{ position: 'absolute', top: -5, right: 20, backgroundColor: '#ed7117', height: 20, width: 20, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'black' }}>{totalQuantity}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

export default Header;
