import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { FunctionComponent, ReactElement, useState } from 'react'
import { Input, OurButton, LevantiskCopyRight } from '../components/ReuasebleComponents/index'
//-=-=-=-=-=-=-=-=-=-=-=-=-=- Firebase--=-=-=-=-=-=-=|
import { app, auth, db } from '../constant/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore";
//-===-=-=-=-=-=- style-=-=-=-=-=-=---=-=-=-=-=-=-|
import Colors from '../style/Colors'
//-=-=-=-=-=-Navigation==
import { useNavigation, StackActions } from '@react-navigation/native';



const Signup: FunctionComponent<{}> = (): ReactElement => {

  //-=-=-=-=-=-=-=-=-=-|component stats.
  const [name, setName] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  //-=-=-=-=- navigation hook.
  const navigation = useNavigation()
  //-=-=--=-=-=-=-=[-=[-=-=[-=-=-]]] sgin up method to create a user. 
  const doSignup = async () => {
    if (name && email && password) {
      try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        if (user) {
          Alert.alert("Success!", `User ${user.email} was successfully created!`)
          navigation.navigate("signin")
          return true;
        }
      } catch (error) {
        console.error("Error adding document: ", error);
        Alert.alert(`Error`, "Email is alreay in use, try sign in!")
      }
    } else {
      Alert.alert(`Error`, 'Missing Fields')
      return false;
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.header}>|-=-=-=- Sign up </Text>
      <Input placeholder='Name' onChangeText={text => setName(text)} />
      <Input placeholder='Email' onChangeText={text => setEmail(text)} />
      <Input placeholder='Password' secureTextEntry={true} onChangeText={text => setPassword(text)} />
      <OurButton title='| Sign up' onPress={doSignup} />
      <View style={{ flexDirection: "row" }}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.dispatch(StackActions.replace("signin"))}>
          <Text style={{ color: Colors.blue, fontSize: 15 }}> | Sign in</Text>
        </TouchableOpacity>
      </View>
      <LevantiskCopyRight />
    </View>
  )
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
  }
})