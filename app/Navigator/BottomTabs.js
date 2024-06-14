import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Container/Home/Home';
import City from '../Container/City/City';
import { ProductStack } from './StackNavigator';
import DrawerNavigator from './DrawerNavigator';

const Tab = createBottomTabNavigator();
export default function BottomTabs() {
  return (
    <Tab.Navigator >

      <Tab.Screen
        options={{
          headerShown: false
        }}
        name="Home"
        component={DrawerNavigator} />


      <Tab.Screen
        options={{
          headerShown: true
        }}
        name="city"
        component={City} />
      <Tab.Screen 
    
      name="Product" component={ProductStack} />
      
      
    </Tab.Navigator>
  )
}


// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../Container/Home/Home';
// import City from '../Container/City/City';
// import { ProductStack } from './StackNavigator';
// import DrawerNavigator from './DrawerNavigator';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const Tab = createBottomTabNavigator();

// export default function BottomTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           let iconName;
//           if (route.name === 'Home') {
//             iconName = 'home';
//             return <FontAwesome name={iconName} size={size} color={color} />;
//           } else if (route.name === 'City') {
//             iconName = 'location-city';
//             return <Ionicons name={iconName} size={size} color={color} />;
//           } else if (route.name === 'Product') {
//             iconName = 'cart';
//             return <Ionicons name={iconName} size={size} color={color} />;
//           }
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={DrawerNavigator}
//         options={{ headerShown: false }}
//       />
//       <Tab.Screen
//         name="City"
//         component={City}
//         options={{ headerShown: true }}
//       />
//       <Tab.Screen
//         name="Product"
//         component={ProductStack}
//       />
//     </Tab.Navigator>
//   );
// }