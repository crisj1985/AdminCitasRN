/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import { Cita} from "./src/Cita"
import { Formulario } from "./src/Formulario"

const App = () => {
  const [citas,setCitas] = useState([
    {id:"1",paciente:"Hook",propietario:"Juan",sintomas:"No come"},
    { id: "2", paciente: "Redux", propietario: "Itzel", sintomas: "No duerme" },
    { id: "3", paciente: "Native", propietario: "Josue", sintomas: "No canta" },
  ]);

  const eliminarPaciente = id => {
    setCitas((citas)=>{
      return citas.filter( cita => cita.id != id)
    })
  }

  return (
    <View style= {styles.contenedor}>
      <Text style={styles.titulo} >Administrador de Citas</Text>
      <Formulario />
      <Text style={styles.titulo}> {citas.length > 0 ? 'Administra tus citas' : 'No tienes citas, agrega una'} </Text>
      <FlatList
        data={citas}
        renderItem={({item})=>
          <Cita cita={item} eliminarPaciente={eliminarPaciente}/>
        }
        keyExtractor={item => item.id}
      />
    </View>
    
  );
};

const styles = StyleSheet.create({  

  contenedor:{
backgroundColor:"#AA076B",
flex:1
  },
  titulo:{
    color:"#FFF",
    marginTop:40,
    // marginBottom:20,
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center'

  }
});

export default App;
