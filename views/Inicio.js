import React from 'react';
import { Text, View,StyleSheet, Button } from 'react-native';

const Inicio = ({navigation}) => {

    const informacion ={
        clienteId: 20,
        totalPagar: 500
    }

    const visitarNosotros = () =>{
        navigation.navigate('Nosotros',informacion)
    }


  return (
    <View style={styles.contenedor}>
        <Text style={styles.letra}>Inicio</Text>
        <Button
            title="Ir a Nosotros"
            onPress={() => visitarNosotros()}

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

export default Inicio;
