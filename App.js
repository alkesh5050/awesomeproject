import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator, { HomeStack, ProductStack } from './app/Navigator/StackNavigator';
import DrawerNavigator from './app/Navigator/DrawerNavigator';
import BottomTabs from './app/Navigator/BottomTabs';
import Button1 from './app/Container/Button/Button';
import Switch1 from './app/Container/Button/Switch';
import SectionList1 from './app/Container/Button/SectionList1';
import BackHandler1 from './app/Container/Button/BackHandler1';
import DrawerLayoutAndroid1 from './app/Container/Button/DrawerLayoutAndroid1';
import PermissionsAndroid1 from './app/Container/Button/PermissionsAndroid1';
import ToastAndroid1 from './app/Container/Button/ToastAndroid1';
import ActionSheetIOS1 from './app/Container/Button/ActionSheetIOS1';
import ActivityIndicator1 from './app/Container/Button/ActivityIndicator1';
import Animated1 from './app/Container/Button/Animated1';
import KeyboardAvoidingView1 from './app/Container/Button/KeyboardAvoidingView1';
import Linking1 from './app/Container/Button/Linking1';
import PixelRatio1 from './app/Container/Button/PixelRatio1';
import Netinfo1 from './app/Container/Button/Netinfo1';



export default function App() {
  return (

    //   <NavigationContainer >
    //   {/* <ProductStack/> */}
    //  {/* <HomeStack/> */}
    //  {/* <DrawerNavigator/> */}
    //  <BottomTabs/>
    //   </NavigationContainer>
    <Netinfo1 />

  )
}
