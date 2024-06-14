import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import City from '../Container/City/City';
import Counter from '../Container/Counterclass/Counter';
import Country from '../Container/country/Country';
import Home from '../Container/Home/Home';
import Details from '../Container/Details/Details';


const Stack = createNativeStackNavigator();

// export default function StackNavigator() {
//   return (
//     <NavigationContainer >
//     <Stack.Navigator >

//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Details" component={Details} />
//     </Stack.Navigator>

//   </NavigationContainer>
//   )
// }
const ProductStack = () => {
   return (
      <Stack.Navigator >

         <Stack.Screen
            options={{
               headerShown: false
            }}
            name="City" component={City} />
         <Stack.Screen name="Country" component={Country} />
      </Stack.Navigator>
   )
}

const HomeStack = () => {
   return (
      <Stack.Navigator
      // screenOptions={{
      //    headerShown: false
      // }}
      >

         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen
            options={{
               headerBackTitle: 'Cusaaatom Back',
               headerBackTitleStyle: { fontSize: 80 },
            }}
            name="Details" component={Details} />
      </Stack.Navigator>
   )
}

export { ProductStack, HomeStack }