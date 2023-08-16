import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useProductContext } from './ProductContext';

const FinalizarVendaScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { product } = route.params;

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('PIX');

  const { soldProducts, setSoldProducts } = useProductContext();
  const [quantitySold, setQuantitySold] = useState('');
  const [priceSold, setPriceSold] = useState('');

  const handleFinalizeSale = () => {
    if (quantitySold !== '' && priceSold !== '') {
      const totalValue = parseFloat(priceSold) * parseInt(quantitySold);
      const currentDate = getCurrentDate();

      setSoldProducts([
        ...soldProducts,
        {
          ...product,
          quantitySold: parseInt(quantitySold),
          totalValue,
          saleDate: currentDate,
          paymentMethod: selectedPaymentMethod,
        },
      ]);

      setQuantitySold('');
      setPriceSold('');

      navigation.navigate('Home');
    }
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Quantidade"
          placeholderTextColor="white"
          value={quantitySold}
          onChangeText={setQuantitySold}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Preço unitário"
          placeholderTextColor="white"
          value={priceSold}
          onChangeText={setPriceSold}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.finalizeButton} onPress={handleFinalizeSale}>
          <Text style={styles.finalizeButtonText}>✅</Text>
        </TouchableOpacity>
      </View>

<View style={styles.paymentMethodContainer}>
  <View style={styles.paymentMethod}>
    <Switch
      value={selectedPaymentMethod === 'PIX'}
      onValueChange={() => setSelectedPaymentMethod('PIX')}
      trackColor={{ false: 'grey', true: 'white' }}
      thumbColor={selectedPaymentMethod === 'PIX' ? '#304F8C' : 'white'}
    />
    <Text style={styles.metodo}>PIX</Text>
  </View>

  <View style={styles.paymentMethod}>
    <Switch
      value={selectedPaymentMethod === 'Dinheiro'}
      onValueChange={() => setSelectedPaymentMethod('Dinheiro')}
      trackColor={{ false: 'grey', true: 'white' }}
      thumbColor={selectedPaymentMethod === 'Dinheiro' ? '#304F8C' : 'white'}
    />
    <Text style={styles.metodo}>Dinheiro</Text>
  </View>

  <View style={styles.paymentMethod}>
    <Switch
      value={selectedPaymentMethod === 'Cartão de Crédito'}
      onValueChange={() => setSelectedPaymentMethod('Cartão de Crédito')}
      trackColor={{ false: 'grey', true: 'white' }}
      thumbColor={selectedPaymentMethod === 'Cartão de Crédito' ? '#304F8C' : 'white'}
    />
    <Text style={styles.metodo}>Cartão de Crédito</Text>
  </View>

  <View style={styles.paymentMethod}>
    <Switch
      value={selectedPaymentMethod === 'Cartão de Débito'}
      onValueChange={() => setSelectedPaymentMethod('Cartão de Débito')}
      trackColor={{ false: 'grey', true: 'white' }}
      thumbColor={selectedPaymentMethod === 'Cartão de Débito' ? '#304F8C' : 'white'}
    />
    <Text style={styles.metodo}>Cartão de Débito</Text>
  </View>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginRight: 10,
    color: '#fff'
  },

  name: {
    color: '#fff'
  },

  finalizeButton: {
    width: 40,
    height: 40,
    backgroundColor: '#112359',
    borderRadius: 10,
    padding: 10
  },

  metodo: {
    color: '#fff'
  },

  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

});

export default FinalizarVendaScreen;