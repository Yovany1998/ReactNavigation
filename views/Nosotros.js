import React from 'react';
import { Text, View,StyleSheet, Button } from 'react-native';

//rote trae los valores
const Nosotros = ({navigation, route}) => {

    const {clienteId} = route.params;
    const volver = () =>{
        //Distintas formas de navegar

        // navigation.navigate('Inicio')
        navigation.goBack();
        // navigation.push('Inicio');
    }
  return (
    <View style={styles.contenedor}>
    <Text style={styles.letra}>{clienteId}</Text>
    <Button
        title="Volver"
        onPress={() => volver()}

    />
</View>
  )
};

const styles = StyleSheet.create({
    letra:{
        color: '#000',
        
    },
    contenedor:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Nosotros;
