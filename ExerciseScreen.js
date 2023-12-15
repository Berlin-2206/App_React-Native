// ExerciseScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { commonStyles } from './commonStyles';

const exercisesData = [
  {
    id: '1',
    name: 'Estiramiento',
    image: require('./assets/estiramiento.jpg'),
    description: 'Realiza 2 series de 10 repeticiones',
  },
  {
    id: '2',
    name: 'Flexiones',
    image: require('./assets/flexiones.jpg'),
    description: 'Realiza 3 series de 10 repeticiones',
  },
  {
    id: '3',
    name: 'Abdominales',
    image: require('./assets/abdominales.jpg'),
    description: 'Realiza 2 series de 10 repeticiones',
  },
  {
    id: '4',
    name: 'Sentadillas',
    image: require('./assets/sentadillas.jpg'),
    description: 'Realiza 4 series de 10 repeticiones',
  },
  {
    id: '5',
    name: 'Resistencia',
    image: require('./assets/resistencia.jpg'),
    description: 'Realiza 6 series de 10 repeticiones',
  },
];

export default function ExerciseScreen() {
  const [expandedImage, setExpandedImage] = useState(null);

  const handleImagePress = (id) => {
    setExpandedImage(expandedImage === id ? null : id);
  };

  return (
    <View style={commonStyles.container}>
      <Text style={styles.headerText}>Rutinas de Ejercicio</Text>
      <FlatList
        data={exercisesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleImagePress(item.id)}>
            <View style={styles.exerciseContainer}>
              <Image
                source={item.image}
                style={[
                  styles.exerciseImage,
                  expandedImage === item.id ? styles.expandedImage : null,
                ]}
              />
              <View style={styles.textContainer}>
                <Text style={styles.exerciseName}>{item.name}</Text>
                <Text style={styles.exerciseDescription}>{item.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.routineText}>Rutina:</Text>
      <Text style={styles.routineDescription}>
        Realiza estos ejercicios en casa. Descansa 1 minuto entre series.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  exerciseContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  exerciseImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
  expandedImage: {
    width: 100,
    height: 100,
  },
  textContainer: {
    justifyContent: 'center',
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  exerciseDescription: {
    fontSize: 16,
  },
  routineText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  routineDescription: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
});
