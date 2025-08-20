import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button,TouchableHighlight,Pressable } from 'react-native';

const icon = require("./assets/icon.png")

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="ligth" />
       <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={{ width: 50, height: 50 }}
       />
      <Text style={{color:'white' }}>Vladimir Ceballos Exitoso!</Text>
      <Button title='pulse here 'onPress={()=> alert('hello Vladimir Ceballos') } color="red"/>
     <TouchableHighlight
  style={styles.redRoundedButton}
  underlayColor="#cc0033" // Un rojo más oscuro para el efecto al presionar
  onPress={() => alert('¡Hola, Vladimir Ceballos!')}
>
  <Text style={styles.buttonText}>Presiona Aquí</Text>
</TouchableHighlight>
<Pressable
        style={({ pressed }) => [
          styles.redRoundedButton,
          pressed ? styles.buttonPressed : styles.basicButton,
        ]}
        onPress={() => alert('¡Presionaste el botón!')}
      >
        <Text style={styles.text}>Presiona Aquí2222</Text>
      </Pressable>

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
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
   basicButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
  },buttonPressed: {
    backgroundColor: '#005bb5', // Color cuando se presiona
  },
});
