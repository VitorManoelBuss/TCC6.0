import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useProductContext } from './ProductContext';
import { useNavigation } from '@react-navigation/native';

function ProdutoVendasScreen({ }) {
  const { products } = useProductContext();
  const navigation = useNavigation();

  const handleProductPress = (item) => {
    navigation.navigate('FinalizarVenda', { product: item }); 
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleProductPress(item)}>
            <View style={styles.productItem}>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#304F8C'
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 5,
  },

  price: {
    color: '#fff'
  },

  name: {
    color: '#fff'
  }

});

export default ProdutoVendasScreen;