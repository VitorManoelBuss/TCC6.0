import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image 
          style={styles.logoImage}
          source={require('./assets/Logo_1.png')}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('ProdutoVendas')}
        >
          <Text style={styles.buttonText}>Vendas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Produtos')}
        >
          <Text style={styles.buttonText}>Produtos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Relatorios')}
        >
          <Text style={styles.buttonText}>Relatórios</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#304F8C'
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover', 
  },
  content: {
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  logoImage: {
    borderRadius: 5,
    width: 150,
    height: 150,
    marginBottom: 20, 
  },
  buttonContainer: {
    width: 200,
    marginVertical: 5,
    backgroundColor: '#112359',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;