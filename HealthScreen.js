// HealthScreen.js

import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { commonStyles } from './commonStyles';

const healthTipsData = [
  {
    id: '1',
    title: 'Mantén una buena hidratación',
    image: require('./assets/hidratacion.png'),
    description: 'Bebe suficiente agua a lo largo del \ndía para mantener tu cuerpo bien hidratado.',
  },
  {
    id: '2',
    title: 'Alimentación Balanceada',
    image: require('./assets/alimentacion.jpg'),
    description: 'Consume una dieta equilibrada que \n incluya frutas,   verduras, \nproteínas y granos enteros.',
  },
  {
    id: '3',
    title: 'Ejercicio Regular',
    image: require('./assets/ejercicio.jpg'),
    description: 'Realiza actividad física regularmente \n  para mantener tu cuerpo \n  y mente saludables.',
  },
  {
    id: '4',
    title: 'Descanso Adecuado',
    image: require('./assets/descanso.jpg'),
    description: 'Asegúrate de tener un buen descanso \n nocturno  para revitalizar tu cuerpo.',
  },
];

export default function HealthScreen() {
  const [expandedTip, setExpandedTip] = useState(null);

  const handleTipPress = (id) => {
    setExpandedTip(expandedTip === id ? null : id);
  };

  return (
    <View style={commonStyles.container}>
      <Text style={styles.headerText}>Consejos de Salud</Text>
      <FlatList
        data={healthTipsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleTipPress(item.id)}>
            <View style={styles.tipContainer}>
              <Image
                source={item.image}
                style={[
                  styles.tipImage,
                  expandedTip === item.id ? styles.expandedTipImage : null,
                ]}
              />
              <View style={styles.textContainer}>
                <Text style={styles.tipTitle}>{item.title}</Text>
                <Text style={styles.tipDescription}>{item.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.adviceText}>Consejo:</Text>
      <Text style={styles.adviceDescription}>
        Incorpora estos consejos en tu rutina diaria para mejorar tu bienestar general.
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
  tipContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tipImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
  expandedTipImage: {
    width: 100,
    height: 100,
  },
  textContainer: {
    justifyContent: 'center',
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tipDescription: {
    fontSize: 16,
  },
  adviceText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  adviceDescription: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
});
