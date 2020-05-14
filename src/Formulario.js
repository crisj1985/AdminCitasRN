import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, Button, TouchableHighlight, TextInput } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export const Formulario = () => {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
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
          <Button title="Show Date Picker" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
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