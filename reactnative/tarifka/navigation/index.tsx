import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import CategoryPage from '../screens/CategoryPage';
import MealPage from '../screens/MealPage';

import { RootStackParamList } from '../types';

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
        name="Home"
        component={Home}
        options={{
          title: "Categories",
        }} />
        <Stack.Screen
        name="CategoryPage"
        component={CategoryPage}
        options={{
          title: "Meals",
        }} />
        <Stack.Screen
        name="MealPage"
        component={MealPage}
        options={{
          title: "Meal Info",
        }} />
    </Stack.Navigator>
  );
}
