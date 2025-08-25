import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { getPartners } from "../lib/partnersService";
import PartnerCard from './PartnerCard'; // <-- Importa el nuevo componente

export default function Main() {
  const [partners, setPartners] = React.useState([]);

  useEffect(() => {
    const loadPartners = async () => {
      try {
        const partnersData = await getPartners();
        setPartners(partnersData);
      } catch (error) {
        console.error("Error al cargar partners:", error);
      }
    };
    
    loadPartners();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" /> 
      <ScrollView>
        {partners.map(partner => (
          <PartnerCard 
            key={partner.id} 
            partner={partner} // <-- Pasa el objeto 'partner' como una prop
          />
        ))}
      </ScrollView>
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
});