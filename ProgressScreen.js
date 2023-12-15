// ProgressScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from './commonStyles';

export default function ProgressScreen() {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.screenText}>Progreso</Text>
    </View>
  );
}
