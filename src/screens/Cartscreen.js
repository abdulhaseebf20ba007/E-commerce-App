import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import Header from '../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import { removeCartItem, incrementQuantity, decrementQuantity } from './cartslice'; 



const CartScreen = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [subtotal, setSubtotal] = useState(0);

  const loadCartItems = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    setSubtotal(total);
  };

  const handleRemoveItem = (item) => {
    dispatch(removeCartItem(item)); // Use the removeCartItem action creator directly
  };

  const handleIncrementQuantity = (item) => {
    dispatch(incrementQuantity(item)); // Use the incrementQuantity action creator directly
  };

  const handleDecrementQuantity = (item) => {
    dispatch(decrementQuantity(item)); // Use the decrementQuantity action creator directly
  };
  const renderCart = ({ item, index }) => {
    const itemId = parseInt(item.id);
    return (
      <View
        style={{
          alignItems: 'center',
          padding: 10,
          flexDirection: 'row',
          backgroundColor: 'white',
          marginTop: 10,
          justifyContent: 'space-between',
          borderRadius: 10,
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{ width: 70, height: 70, resizeMode: 'contain' }}
        />
        <Text style={{ color: 'black' }}>
          {item.title.length > 15 ? item.title.slice(0, 15) + '...' : item.title}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => handleDecrementQuantity(item)}>
        <Text style={{ fontWeight: '600', fontSize: 25 }}>-</Text>
      </TouchableOpacity>
      <Text
        style={{ color: 'black', fontWeight: '600', marginHorizontal: 10, fontSize: 20 }}
      >
        {item.quantity}
      </Text>
      <TouchableOpacity onPress={() => handleIncrementQuantity(index)}>
        <Text style={{ fontWeight: '600', fontSize: 25 }}>+</Text>
      </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Text style={{ color: 'black', fontWeight: '600', marginRight: 15, fontSize: 20 }}>
            ${item.price}
          </Text>
          <TouchableOpacity onPress={() => handleRemoveItem(index)}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1214/1214428.png' }}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const total = subtotal + 50 + 5;

  useEffect(() => {
    loadCartItems();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header title="Cart" />
      <View style={{ flex: 1, padding: 10 }}>
      <FlatList
  data={items}
  keyExtractor={(item, index) => item.id.toString() + '_' + index}
  renderItem={renderCart}
/>

        <View
          style={{
            justifyContent: 'space-between',
            marginEnd: 10,
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 10,
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Subtotal</Text>
            <Text style={{ marginLeft: 250 }}>
              ${subtotal.toString().length > 7 ? subtotal.toString().slice(0, 7) + '..' : subtotal}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Shipping Fees</Text>
            <Text style={{ marginLeft: 220 }}>$50</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Taxes</Text>
            <Text style={{ marginLeft: 270 }}>$5</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black' }}>Total (Including Taxes)</Text>
            <Text style={{ marginLeft: 170, color: 'black' }}>
              ${total.toString().length > 7 ? total.toString().slice(0, 7) + '..' : total}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
