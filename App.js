// App.js
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { initializeApp } from '@react-native-firebase/app';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';
import DietScreen from './DietScreen';
import HealthScreen from './HealthScreen';
import ExerciseScreen from './ExerciseScreen';
import { firebaseConfig } from './firebaseConfig';

initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    // Código de inicialización adicional si es necesario
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Diet" component={DietScreen} />
        <Stack.Screen name="Health" component={HealthScreen} />
        <Stack.Screen name="Exercise" component={ExerciseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
