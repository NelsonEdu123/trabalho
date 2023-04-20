import { StatusBar } from 'expo-status-bar';
import react, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function App() {
  const [tipos, settipos] = useState([
    {tipos: 'FINANCEIRO' ,key: '1'},
    {tipos: 'SAÚDE' ,key: '2'},
    {tipos: 'DÚVIDAS' ,key: '3'},
    {tipos: 'DENÚNCIAS' ,key: '4'},
    {tipos: 'SUGESTÕES' ,key: '5'},
    {tipos: 'RECLAMAÇÕES' ,key: '6'},
    {tipos: 'RELATÓRIOS' ,key: '7'},
    {tipos: 'CONTESTAÇÕES' ,key: '8'},
]);

  const pressHandler = (key) => {

  }

  return (
    <View style={styles.container}>
      <View style={styles.head}>
      </View>

      <View style={styles.titulo}>
        <Text style={styles.texto1}>Descreva o chamado e selecione o motivo.</Text> 
      </View>

      <TextInput 
      style={styles.input}
      placeholder= 'Descreva seu chamado'
      placeholderTextColor={'#777'}

      textAlign='left'/>

    
      <FlatList 
      data={tipos}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.tipos}</Text>
        </TouchableOpacity>
      )}
      />
    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

   
  },
  head: {
    backgroundColor: '#fc8803',
    padding: 30,
    paddingHorizontal: 500,
    borderWidth:2,
    borderColor: '#fc6f03',
  },
  caixa: {
      padding: 300
  },
  input: {
    borderWidth: 3,
    borderColor: '#fc6f03',
    width:350,
    padding: 80,
    marginTop: 50,
    marginHorizontal: 13,
    borderRadius: 10,
    marginBottom: 10,
  },
  titulo: {
   justifyContent: 'flex-end',
    marginTop: 30,
    marginHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#fc8803',
    borderRadius: 10,
  },
  texto1: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  item: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#fc8803',
    fontSize: 15,
    marginHorizontal: 30,
    fontWeight: 'bold',
    borderColor: '#fc6f03',
    borderWidth: 3,
  },

  icon: {
    alignSelf: 'flex-start'
  }
});
