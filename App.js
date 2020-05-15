import React,{useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableHighlight, Platform} from 'react-native';
import { Cita} from "./src/Cita"
import { Formulario } from "./src/Formulario"

const App = () => {
  const [citas,setCitas] = useState([
    {id:"1",paciente:"Hook",propietario:"Juan",sintomas:"No come"},
    { id: "2", paciente: "Redux", propietario: "Itzel", sintomas: "No duerme" },
    { id: "3", paciente: "Native", propietario: "Josue", sintomas: "No canta" },
  ]);

  const [mostrarForm, setMostrarForm] = useState(false);

  const eliminarPaciente = id => {
    setCitas((citas)=>{
      return citas.filter( cita => cita.id != id)
    })
  }

  const mostrarFormulario = () => {
    setMostrarForm(!mostrarForm)
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
      <TouchableHighlight onPress={() => mostrarFormulario()} style={styles.btnMostrarForm}>
        <Text style={styles.txtMostrarForm}>Crear Nueva Cita</Text>
      </TouchableHighlight>
      <View style={styles.contenido}>
        {mostrarForm ? (
          <>
            <Text style={styles.titulo}>Crear Nueva Cita</Text>
            <Formulario citas={citas} setCitas={setCitas} mostrarFormulario={mostrarFormulario} />
          </>
        ) : (
          <>
            <Text style={styles.titulo}>
              {citas.length > 0 ? 'Administra tus citas' : 'No tienes citas, agrega una'}{' '}
            </Text>
            <FlatList
              data={citas}
              renderItem={({ item }) => <Cita cita={item} eliminarPaciente={eliminarPaciente} />}
              keyExtractor={(item) => item.id + ''}
              style={styles.listado}
            />
          </>
        )}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({  

  contenedor:{
backgroundColor:"#AA076B",
flex:1
  },
  titulo:{
    color:"#FFF",
    marginTop: Platform.OS === 'ios' ? 40 : 20 ,
    // marginBottom:20,
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center'

  },
  contenido:{
    flex:1,
    marginHorizontal: "2.5%"

  },
  listado:{
    flex:1,

  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: "#7d024e",
    marginVertical: 10
  },
  txtMostrarForm: {
    color: "#FFF",
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default App;
