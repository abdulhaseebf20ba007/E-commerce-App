import React from 'react';
import { View, Image, Text, FlatList } from 'react-native'; // Add Text import
import { useSelector, useDispatch } from 'react-redux';

import Header from "../../components/Header";

const Wishlist = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
      </View>
    );
  };

  return (
    // JSX representation of the Wishlist component
    <View>
      <Header title="Wishlist" />
      <FlatList
        data={items}
        keyExtractor={(item, index) => item.id.toString() + '_' + index}
        renderItem={renderCart}
      />
    </View>
  );
};

export default Wishlist;
