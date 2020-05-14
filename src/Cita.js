import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableHighlight } from 'react-native'

export const Cita = ({ cita, eliminarPaciente})=> {

     const dialogoEliminar = (id) => {
         console.log("Eliminando...");
         eliminarPaciente(id);
     }

        return (
            <View style={styles.cita}>
                <View>
                    <Text style={styles.label}> Paciente: </Text>
                    <Text style={styles.texto}> {cita.paciente} </Text>
                </View>
                <View>
                    <Text style={styles.label}> Propietario: </Text>
                    <Text style={styles.texto}> {cita.propietario} </Text>
                </View>
                <View>
                    <Text style={styles.label}> Sintomas: </Text>
                    <Text style={styles.texto}> {cita.sintomas} </Text>
                </View>
                <View>
                    <TouchableHighlight 
                        onPress={()=>dialogoEliminar(cita.id)}
                        style={styles.botonEliminar}>
                            <Text style={styles.txtEliminar}>Eliminar &times;</Text>
                    </TouchableHighlight>
                </View>
            </View>
            );
    }

    const styles = StyleSheet.create({
        cita:{
            backgroundColor:"#FFF",
            borderBottomColor:"#e1e1e1",
            borderStyle:'solid',
            borderBottomWidth:3,
            paddingVertical:20,
            paddingHorizontal:10
        },
        label:{
            fontWeight:'bold',
            fontSize:18,
            marginTop:20
        },
        texto:{
            fontSize: 18,
        },
        botonEliminar:{
            padding:10,
            backgroundColor:"red",
            marginVertical:10
        },
        txtEliminar:{
            color:"#FFF",
            fontWeight:'bold',
            textAlign:'center'
        }
    })