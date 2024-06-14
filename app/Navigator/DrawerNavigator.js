import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Container/Home/Home';
import Details from '../Container/Details/Details';
import { HomeStack, ProductStack } from './StackNavigator';
import stylesDemo from '../Container/styles/stylesDemo';
import StylesDemo2 from '../Container/styles/StylesDemo2';
import StylesDemo3 from '../Container/styles/StylesDemo3';
import Button from '../Container/Button/Button';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeStack} />
    <Drawer.Screen name="product" component={ProductStack} />
    <Drawer.Screen name="stylesDemo" component={stylesDemo} />
    <Drawer.Screen name="stylesDemo2" component={StylesDemo2} />
    <Drawer.Screen name="stylesDemo3" component={StylesDemo3} />

  </Drawer.Navigator>
  )
}