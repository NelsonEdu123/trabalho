import { StatusBar } from 'expo-status-bar';
import react, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView,Keyboard ,TouchableOpacity, Alert, TouchableWithoutFeedback } from 'react-native';
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
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      <View style={styles.head}>
      <AntDesign style={styles.icon1} name="bars" size={30} color="black" />
      </View>

      <View style={styles.titulo}>
        <Text style={styles.texto1}>Descreva o chamado e selecione o motivo.</Text> 
      </View>

      <TextInput 
      style={styles.input}
      placeholder= 'Descreva seu chamado'
      placeholderTextColor={'#777'}

      textAlign='left'/>

      <View style={styles.button}>
        <Button title='ENVIAR' 
        onPress={() => Alert.alert('Seu chamado sera enviado, aguarde uma resposta')}></Button>
        <AntDesign style={styles.icon2} name="rocket1" size={24} color="black" />
      </View>
    
      <FlatList 
      data={tipos}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.tipos}</Text>
        </TouchableOpacity>
      )}
      />
    

    </View>
    </TouchableWithoutFeedback>
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
    alignItems: 'center',
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

  button: {
    backgroundColor: '#fc8803',
    borderColor: '#fc6f03',
    borderWidth: 3,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal:110,
    borderRadius: 10,
    alignContent: 'center',
    textAlign: 'left'
  },
  icon1:{
  position: 'absolute',
  left:335,
  top: 20,
  },
  icon2:{
    position: 'absolute',
    right:12,
    top:5,
    }
});
