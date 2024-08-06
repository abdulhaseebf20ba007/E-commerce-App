import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import { useDispatch } from 'react-redux';
import { addItemToCart } from './actiontypes';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const additem = (item) => dispatch(addItemToCart(item));

  const url = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleProductPress = (item) => {
    navigation.navigate('ProductDetail', { item });
  };

  const renderItem = ({ item }) => (
    <View style={{ flex: 1, marginBottom: 10, marginHorizontal: 5, backgroundColor: '#fff', padding: 5 }}>
      <TouchableOpacity onPress={() => handleProductPress(item)} activeOpacity={0.5}>
        <Image source={{ uri: item.image }} style={{ width: 180, height: 150, resizeMode: 'contain' }} />
        <View style={{ marginLeft: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.title}</Text>
          <Text style={{ color: 'red', fontWeight: 'bold', marginVertical: 5 }}>${item.price}</Text>
          <Text style={{}}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#ed7117" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#ececec' }}>
      <Header title={'Home'} />
      <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#ed7117', alignSelf: 'center', margin: 10 }}>Products</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Home;
