import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, Button, TouchableHighlight, TextInput, Alert,ScrollView } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import shortid from 'shortid';

export const Formulario = ({ citas, setCitas, mostrarFormulario }) => {
         const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
         const [isTimePickerVisible, setTimePickerVisibility] = useState(false)
         const [fecha, setFecha] = useState('')
         const [hora, setHora] = useState('')
         const [paciente, setPaciente] = useState('')
         const [propietario, setPropietario] = useState('')
         const [telefono, setTelefono] = useState('')
         const [sintomas, setSintomas] = useState('')

         const showDatePicker = () => {
           setDatePickerVisibility(true)
         }

         const hideDatePicker = () => {
           setDatePickerVisibility(false)
         }

         const confirmarFecha = (date) => {
           const opciones = { year: 'numeric', month: 'long', day: '2-digit' }
           setFecha(date.toLocaleString('es-ES'), opciones)
           hideDatePicker()
         }

         const showTimePicker = () => {
           setTimePickerVisibility(true)
         }

         const hideTimePicker = () => {
           setTimePickerVisibility(false)
         }

         const confirmarHora = (hora) => {
           setHora(hora.toLocaleTimeString('en-US'))
           hideTimePicker()
         }

         const crearNuevaCita = () => {
           if (
             paciente.trim() === '' ||
             propietario.trim() === '' ||
             sintomas.trim() === '' ||
             telefono.trim() === '' ||
             fecha.trim() === '' ||
             hora.trim() === ''
           ) {
             console.log('Algo FALLO')

             mostrarAlert()
           }

           const cita = { paciente, propietario, telefono, sintomas, fecha, hora }
           cita.id = shortid.generate()
           console.log(cita)
           const citasNueva = [...citas, cita];
           setCitas(citasNueva);
           mostrarFormulario(false);
         }

         const mostrarAlert = () => {
           Alert.alert('Error', 'Todos los campos son obligatorios', [{ text: 'Ok' }])
         }

         return (
           <>
             <ScrollView style={styles.formulario}>
               <View>
                 <Text style={styles.label}> Paciente: </Text>
                 <TextInput style={styles.input} onChangeText={(txt) => setPaciente(txt)} />
               </View>
               <View>
                 <Text style={styles.label}> Dueno: </Text>
                 <TextInput style={styles.input} onChangeText={(txt) => setPropietario(txt)} />
               </View>
               <View>
                 <Text style={styles.label}> Telefono Contacto: </Text>
                 <TextInput style={styles.input} onChangeText={(txt) => setTelefono(txt)} keyboardType="phone-pad" />
               </View>
               <View>
                 <Text style={styles.label}> Sintomas: </Text>
                 <TextInput multiline style={styles.input} onChangeText={(txt) => setSintomas(txt)} />
               </View>

               <View>
                 <Text style={styles.label}>Fecha:</Text>
                 <Button title="Seleccionar Fecha" onPress={showDatePicker} />
                 <DateTimePickerModal
                   isVisible={isDatePickerVisible}
                   mode="date"
                   onConfirm={confirmarFecha}
                   onCancel={hideDatePicker}
                 />
                 <Text>{fecha}</Text>
               </View>
               <View>
                 <Text style={styles.label}>Hora:</Text>
                 <Button title="Seleccionar Hora" onPress={showTimePicker} />
                 <DateTimePickerModal
                   isVisible={isTimePickerVisible}
                   mode="time"
                   onConfirm={confirmarHora}
                   onCancel={hideTimePicker}
                   is24Hour
                 />
                 <Text>{hora}</Text>
               </View>
               <TouchableHighlight onPress={() => crearNuevaCita()} style={styles.btnSubmit}>
                 <Text style={styles.txtSubmit}>Crear Nueva Cita</Text>
               </TouchableHighlight>
             </ScrollView>
           </>
         )
       }

const styles = StyleSheet.create({
    formulario:{
        backgroundColor:"#FFF",
        paddingVertical:10,
        paddingHorizontal: 20,
        marginHorizontal:"2.5%"
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        borderColor: "#e1e1e1",
        borderWidth: 1,
        borderStyle: "solid"
    },
  btnSubmit: {
    padding: 10,
    backgroundColor: "#7d024e",
    marginVertical: 10
  },
  txtSubmit: {
    color: "#FFF",
    fontWeight: 'bold',
    textAlign: 'center'
  }
})