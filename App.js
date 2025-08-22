import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View,ScrollView,SafeAreaView } from 'react-native';
import { getPartners } from "./lib/partnersService"; // <-- Corregido el nombre del método



export default function App() {
  const [partners, setPartners] = React.useState([]);

  useEffect(() => {
    const loadPartners = async () => {
      try {
        const partnersData = await getPartners(); // <-- Se cambió la variable a 'partnersData'
        setPartners(partnersData); // <-- Ahora se usa la variable 'partnersData' para actualizar el estado
      } catch (error) {
        console.error("Error al cargar partners:", error);
      }
    };
    
    loadPartners();
  }, []);

  return (
    <View style={styles.container}>
        <StatusBar style="auto" /> 
      {/*<SafeAreaView>*/}
      <ScrollView>
      {partners.map(partner => (
        <View key={partner.id} style={styles.card}>
          <Text style>Name</Text>
          <Text>{partner.name}</Text>
           <Text>Email</Text>
           <Text>{partner.email}</Text>
            <Text>Phone</Text>
            <Text>{partner.phone}</Text>
             <Text>Date Record</Text>
             <Text>{partner.dateRecord}</Text>
        </View>
      ))}
      </ScrollView>
      {/* </SafeAreaView>*/}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    width: 250,
    height: 300,
    borderRadius: 10,
    backgroundColor: '#333', // Se agregó un color para que la tarjeta sea visible
    margin: 10, // Se agregó un margen para que no estén pegadas
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30, // El tamaño de la fuente
    fontWeight: 'bold', // La fuente en negrita
    color: '#333', // El color del texto
    marginBottom: 10, // Un poco de espacio debajo del título
    textAlign: 'center', // Alineación al centro
  },
});