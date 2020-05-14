import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, Button, TouchableHighlight, TextInput } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export const Formulario = () => {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmarFecha = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const confirmarHora = (date) => {
    console.warn("A date has been picked: ", date);
    hideTimePicker();
  };



    return (
      <>
        <View style={styles.formulario}>
          <View>
            <Text style={styles.label}> Paciente: </Text>
            <TextInput style={styles.input} onChangeText={txt => {}} />
          </View>
          <View>
            <Text style={styles.label}> Dueno: </Text>
            <TextInput style={styles.input} onChangeText={txt => {}} />
          </View>
          <View>
            <Text style={styles.label}> Telefono Contacto: </Text>
            <TextInput
              style={styles.input}
              onChangeText={txt => {}}
              keyboardType="phone-pad"
            />
          </View>
          <View>
            <Text style={styles.label}> Sintomas: </Text>
            <TextInput
              multiline
              style={styles.input}
              onChangeText={txt => {}}
            />
          </View>

          <View>
            <Button title="Seleccionar Fecha" onPress={showDatePicker} />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={confirmarFecha}
              onCancel={hideDatePicker}
              locale = "es_Es"
            />
          </View>
          <View>
            <Button title="Seleccionar Hora" onPress={showTimePicker} />
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={confirmarHora}
              onCancel={hideTimePicker}
              is24Hour
            />
          </View>
        </View>
      </>
    );
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
    }
})