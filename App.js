import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker'; // * significa conjunto de funções
 
export default function App() {
  const [image, setImage] = useState(null);
  const carregarFotos = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true, // permite editar
      aspect: [4, 3], // tamanho, pode deixar sem
      quality: 1,
    });
 
    if(!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }
 
  return (
    <View style={styles.container}>
      <Button title='Selecionar foto' onPress={carregarFotos}></Button>
      { image && <Image source = {{ uri: image }} style = { styles.image } />}
      <StatusBar style="auto" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200
  }
});
 