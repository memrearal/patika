import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

import Header from "../components/Layout/Header";

import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Login';

/*
import LinkingConfiguration from './LinkingConfiguration';
in navigationcontainer:
linking={LinkingConfiguration}
*/

export default function Navigation(){
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Login",
          headerShown: false
        }} />
        <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: "Register",
          headerShown: false
        }} />
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          header: ({ scene, previous, navigation }) => {
            return ( <Header navigation={navigation} scene={scene} backButton={previous ? true : false} /> );
          }
        }} />
    </Stack.Navigator>
  );
}
