import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { commonStyles } from './commonStyles';

export default function DietScreen() {
  const dietCombinations = [
    { id: 1, name: 'Desayuno Energético', image: require('./assets/desayuno.jpg'), description: 'Incluye alimentos como avena, frutas y yogurt.', phrase: '¡Energía para el día!' },
    { id: 2, name: 'Almuerzo Saludable', image: require('./assets/almuerzo.png'), description: 'Puede incluir proteínas magras, vegetales \n y granos enteros.', phrase: 'Equilibrio y nutrientes.' },
    { id: 3, name: 'Merienda Nutritiva', image: require('./assets/merienda.jpg'), description: 'Pueden ser frutas, frutos \n secos o yogur con granola.', phrase: 'Recupera tus energías.' },
    { id: 4, name: 'Cena Ligera', image: require('./assets/cena.jpeg'), description: 'Opta por alimentos bajos en grasas.', phrase: 'Digestión ligera.' },
    { id: 5, name: 'Snack de Frutas', image: require('./assets/snack.jpg'), description: 'Diferentes frutas para obtener \n una variedad de nutrientes.', phrase: 'Sabor y salud en cada bocado.' },
  ];

  const [expandedDietId, setExpandedDietId] = useState(null);

  const toggleDescription = (dietId) => {
    setExpandedDietId(expandedDietId === dietId ? null : dietId);
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.screenText}>Dietas</Text>

      {/* Imágenes relacionadas con dietas (Ejemplo: 5 imágenes) */}
      <View style={styles.dietImagesContainer}>
        {dietCombinations.map((combination) => (
          <Image
            key={combination.id}
            style={styles.dietImage}
            source={combination.image}
            resizeMode="cover"
          />
        ))}
      </View>

      {/* Información sobre dietas */}
      <Text style={styles.descriptionText}>
        Planifica tus comidas y sigue una dieta equilibrada para mantener un estilo de vida saludable.
      </Text>

      {/* Lista de Mejores Combinaciones de Dietas */}
      <View style={styles.combinationListContainer}>
        {dietCombinations.map((combination) => (
          <TouchableOpacity
            key={combination.id}
            style={styles.combinationItem}
            onPress={() => toggleDescription(combination.id)}
          >
            <Image
              style={styles.combinationImage}
              source={combination.image}
              resizeMode="cover"
            />
            <View>
              <Text style={styles.combinationName}>{combination.name}</Text>
              {expandedDietId === combination.id && (
                <>
                  <Text style={styles.combinationDescription}>{combination.description}</Text>
                  <Text style={styles.combinationPhrase}>{combination.phrase}</Text>
                </>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
    color: 'black',
  },
  dietImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  dietImage: {
    width: '18%',
    height: 100,
    borderRadius: 10,
  },
  combinationListContainer: {
    marginTop: 20,
  },
  combinationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  combinationImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  combinationName: {
    fontSize: 16,
    color: 'black',
  },
  combinationDescription: {
    fontSize: 14,
    color: 'black',
  },
  combinationPhrase: {
    fontSize: 12,
    fontStyle: 'italic',
    color: 'black',
  },
});
