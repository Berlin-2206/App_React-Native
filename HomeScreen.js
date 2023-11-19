// HomeScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Pantalla de Dietas
function DietScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenText}>Pantalla de Dietas</Text>
    </View>
  );
}

// Pantalla de Salud
function HealthScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenText}>Pantalla de Salud</Text>
    </View>
  );
}

// Pantalla de Ejercicios
function ExerciseScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenText}>Pantalla de Ejercicios</Text>
    </View>
  );
}

// Pantalla de Progreso
function ProgressScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenText}>Pantalla de Progreso</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.gradientContainer}>
        <View style={styles.gradient}></View>
      </View>

      <Image source={require('./assets/aptitud.png')} style={styles.logo} />

      <Text style={styles.motivationalText}>
        "Tu cuerpo puede hacer cualquier cosa, es solo tu mente la que debes convencer."
      </Text>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('Diet')}
        >
          <Icon name="silverware-fork-knife" size={50} color="#fff" />
          <Text style={styles.iconText}>Dietas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('Health')}
        >
          <Icon name="heart" size={50} color="#fff" />
          <Text style={styles.iconText}>Salud</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('Exercise')}
        >
          <Icon name="dumbbell" size={50} color="#fff" />
          <Text style={styles.iconText}>Ejercicios</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('Progress')}
        >
          <Icon name="chart-bar" size={50} color="#fff" />
          <Text style={styles.iconText}>Progreso</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  gradient: {
    flex: 1,
    backgroundColor: 'rgba(76, 102, 159, 0.8)',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  motivationalText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  icon: {
    alignItems: 'center',
  },
  iconText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  screenText: {
    color: '#fff',
    fontSize: 20,
  },
});
