import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PartnerCard({ partner }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Name</Text>
      <Text>{partner.name}</Text>
      <Text style={styles.title}>Email</Text>
      <Text>{partner.email}</Text>
      <Text style={styles.title}>Phone</Text>
      <Text>{partner.phone}</Text>
      <Text style={styles.title}>Date Record</Text>
      <Text>{partner.dateRecord}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 250,
    height: 300,
    borderRadius: 10,
    backgroundColor: '#333',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  title: {
    fontSize: 20, // Títulos dentro de la tarjeta
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    marginBottom: 5,
  },
});