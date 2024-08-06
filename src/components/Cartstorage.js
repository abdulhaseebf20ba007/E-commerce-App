import AsyncStorage from '@react-native-async-storage/async-storage';

// Add item to cart9
export const addItemToCart = async (item) => {
    try {
      const cartItems = await getCartItems();
      const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
      if (existingItem) {
        const updatedCartItems = cartItems.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
  
        await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      } else {
        const updatedCartItems = [...cartItems, { ...item, quantity: 1 }];
        await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      }
    } catch (error) {
      console.log('Error adding item to cart:', error);
    }
  };
  

// Remove item from cart
export const removeCartItem = async (itemId) => {
    try {
      const mycartItems = await AsyncStorage.getItem('cartItems');
      const parsedCartItems = JSON.parse(mycartItems); // Parse the string into an array
      const updatedCartItems = parsedCartItems.filter(item => item.id !== itemId);
      await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } catch (error) {
      console.log('Error removing item from cart:', error);
    }
  };
  

// Get cart items
export const getCartItems = async () => {
  try {
    const cartItems = await AsyncStorage.getItem('cartItems');
    return cartItems ? JSON.parse(cartItems) : [];
  } catch (error) {
    console.log('Error getting cart items:', error);
    return [];
  }
};

