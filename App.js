import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './src/screens/main';
import Signup from "./src/screens/Signup";
import Home from "./src/screens/home";
import ProductDetail from './src/screens/ProductDetail';
import CartScreen from './src/screens/Cartscreen';

import store2 from './src/screens/mystore';
import Wishlist from './src/screens/actions/wishlist';

function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store2}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
          <Stack.Screen name="Cartscreen" component={CartScreen} />
          <Stack.Screen name="Wishlist" component={Wishlist} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
