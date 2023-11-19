import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    // Lógica de inicio de sesión aquí

    // Navegar a la pantalla principal (HomeScreen)
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.gradient}></View>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Image source={require('./assets/logo.png')} style={styles.icon} />
        </View>
        <Text style={styles.appName}>DailyWorkoutPro</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? 'eye-slash' : 'eye'} size={16} color="black" />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        
        <Text style={styles.registerText}>
          ¿No tienes una cuenta? <Text style={styles.registerLink}>Regístrate</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(76, 102, 159, 0.8)',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -100,
  },
  iconContainer: {
    marginBottom: 20,
  },
  icon: {
    width: 150,
    height: 150,
  },
  appName: {
    fontSize: 28,
    color: 'white',
    marginBottom: 70,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    color: 'blue',
    fontWeight: 'bold',
  },
  registerText: {
    fontSize: 16,
    color: 'white',
  },
  registerLink: {
    color: 'white',
    textDecorationLine: 'underline',
  },
});
