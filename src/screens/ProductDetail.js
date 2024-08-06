import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native'; 
import { cartReducer } from './cartslice';
import {useDispatch} from 'react-redux';
import { addCartItem ,addwishlistitem} from './cartslice';
const ProductDetail = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation(); 
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    // Dispatch the addCartItem action directly
    dispatch(addCartItem(item));
  };
  const handleaddwishlistitem=()=>{
    dispatch(addwishlistitem(item));
  }
  return (
    <View style={{flex: 1, backgroundColor: '#ececec'}}>
      <Header title={'Product Detail'} />
      <View
        style={{
          backgroundColor: 'white',
          height: 250,
          marginTop: 10,
          alignItems: 'center',
        }}>
        <Image
          source={{uri: item.image}}
          style={{width: 180, height: 250, resizeMode: 'contain'}}
        />
      </View>
      <View
        style={{
          flex: 1,
          padding: 10,
          margin: 10,
          backgroundColor: 'white',
          borderRadius: 10,
        }}>
        <Text
          style={{
            paddingVertical: 10,
            fontWeight: 'bold',
            fontSize: 20,
            color: 'black',
            borderBottomColor: '#ececec',
            borderBottomWidth: 1,
          }}>
          {item?.title}
        </Text>
        <View
          style={{
            paddingVertical: 10,
            flexDirection: 'row',
            borderBottomWidth: 2,
            borderBottomColor: '#ececec',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold', color: 'red', fontSize: 28}}>
            Price: $ {item?.price}
          </Text>
          <Text
            style={{
              fontSize: 22,
              marginLeft: 8,
              marginTop: 5,
              textDecorationLine: 'line-through',
            }}>
            {' '}
            $45
          </Text>
          <Text style={{fontSize: 15, marginHorizontal: 2, marginTop: 8}}>
            {' '}
            -40%
          </Text>
        </View>
        <View style={{flexDirection: 'row', margin: 15}}>
        <TouchableOpacity activeOpacity={0.5} onPress={handleaddwishlistitem}><Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/327/327592.png',
            }}
            style={{
              resizeMode: 'center',
              width: 20,
              height: 20,
              marginVertical: 9,
            }}></Image></TouchableOpacity>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              marginHorizontal: 5,
              marginVertical: 8,
            }}>
            Add to Wishlist
          </Text>

          <Text style={{fontSize: 30, marginHorizontal: 10}}>| </Text>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/61/61020.png',
            }}
            style={{
              resizeMode: 'center',
              width: 20,
              height: 20,
              marginVertical: 11,
            }}></Image>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              marginHorizontal: 5,
              marginVertical: 8,
            }}>
            Share the Product
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            margin: 1,
            borderBottomColor: '#ececec',
            borderBottomWidth: 1,
            borderTopColor: '#ececec',
            borderTopWidth: 1,
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/66/66841.png',
            }}
            style={{
              resizeMode: 'center',
              width: 40,
              height: 40,
              marginVertical: 11,
            }}></Image>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              marginHorizontal: 8,
              marginVertical: 18,
            }}>
            Standard Delivery Time
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              marginHorizontal: 1,
              marginVertical: 21,
            }}>
            5-10 Days
          </Text>
        </View>
        <Text style={{color: 'black', fontSize: 15}}>{item?.description}</Text>
      </View>
      <View
        style={{backgroundColor: 'white', alignItems: 'flex-end', padding: 10}}>
         <TouchableOpacity activeOpacity={0.5} onPress={handleAddToCart}>
      <Text
        style={{
          fontSize: 20,
          backgroundColor: '#ed7117',
          padding: 10,
          borderRadius: 15,
          fontWeight: 'bold',
          color: '#fff',
        }}>
        Add to Cart
      </Text>
    </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail;
