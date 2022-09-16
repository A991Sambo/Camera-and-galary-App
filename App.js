import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image,Pressable} from 'react-native';
import  * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
//  import { icon } from 'react-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function App() {
  const [image, setImage] = useState('');

const [status, requestPermission] = ImagePicker.useCameraPermissions();
  async function openCamera(){
    if(status.status==="denied"){
      requestPermission();
    }else{
      let result =await ImagePicker.launchCameraAsync({mediaTypes: ImagePicker.MediaTypeOptions.All});
      console.log(result);
      setImage(result)
    }
    
  }
  async function openLibrary(){
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    setImage(result)
    console.log(status);
  }

  return (

    <View style={styles.container}>
   
      <Text> </Text>
     
      <Image source={image?image: FontAwesome5  } style={{height: 300, width: 300}} />
      
      <MaterialCommunityIcons name="folder-upload-outline" size={50} color="white" onPress={openLibrary} />

      <FontAwesome name="camera-retro" size={50} color="white" onPress={openCamera}/>

      <StatusBar style="auto" />


    </View>




  );
}

    const styles = StyleSheet.create({
         container: {
            flex: 1,
            backgroundColor: 'gray',
            alignItems: 'center',
            justifyContent: 'center',
  },
});
