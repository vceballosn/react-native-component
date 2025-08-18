import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button,TouchableHighlight } from 'react-native';

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
        style={styles.button}
        underlayColor="#09f"
        onPress={() => alert('¡Hola, Vladimir Ceballos!')}
      >
        <Text style={styles.buttonText}>Presiona Aquí</Text>
      </TouchableHighlight>
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
});
