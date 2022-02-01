import 'react-native-gesture-handler';
import React from 'react';

import {
  StyleSheet,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';

const Stack = createStackNavigator();
const App = () => {
  
  return (
   <>
   {/* padre de la navegación */}
   <NavigationContainer>
     {/* navegación con stack */}
      <Stack.Navigator
       initialRouteName="Inicio"
       screenOptions={{
        headerTitleAlign: 'center',
        headerStyle:{
          backgroundColor: '#F4511E'
        },
        headerTintColor: '#FFF',
        headerTitleStyle:{
          fontWeight: 'bold'
        }
       }}
      >
          <Stack.Screen
              name="Inicio"
              component={Inicio}
          />

          <Stack.Screen
            name= "Nosotros"
            component={Nosotros}
            // Para estilos se usa options
            options={({route}) => ({
              title: route.params.clienteId
            })}
          />

      </Stack.Navigator>
   </NavigationContainer>
   </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
