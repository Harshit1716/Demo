import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FirstScreen} from '../screens';
import ProfileScreen from '../screens/ProfileScreen';
import BottomTab from './BottomTabs';

const RootStack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="ProfileScreen"
        screenOptions={{
          headerStyle: {
            // backgroundColor: '#ffedd5',
          },
        }}>
        <RootStack.Screen
          options={{
            headerShown: false,
          }}
          name="FirstScreen"
          component={FirstScreen}
        />
        <RootStack.Screen
          options={{
            headerShown: false,
          }}
          name="ProfileScreen"
          component={BottomTab}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
