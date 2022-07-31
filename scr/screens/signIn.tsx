import { Alert, StyleSheet, Text, View, Linking } from 'react-native'
import React, { FunctionComponent, ReactElement, useState } from 'react'
import { Input, OurButton, LevantiskCopyRight } from '../components/ReuasebleComponents/index'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { signInWithEmailAndPassword } from 'firebase/auth'



//==-=-=-=-=-=-=- navigation import=-=-=-=-=-=-=
import { useNavigation, StackActions } from '@react-navigation/native'
//-=-=-=-=-=-=-=-=-=-=-=-=-=- Firebase--=-=-=-=-=-=-=-
import { app, auth, db } from '../constant/firebase';
//-===-=-=-=-=-=- style
import colors from '../style/Colors'

const SignIn: FunctionComponent<{}> = (props): ReactElement => {

  //=-=-=-=-=-=-=-=-=-=-=-components stats-=-=-=|||
  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)

  const navigation = useNavigation()

  const doLogin = async () => {
    //-=-=-=-= we check if email and pass exist.
    if (email && password) {
      //-=-=-= if true then we sign in withe the firebase method. 
      try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        if (user) {
          //-=-=- if user exists loggedin then we go with this. 
          Alert.alert("Success", ` ${user.email} has successfully signed in!`);
          navigation.dispatch(StackActions.replace("home"))
          return true;
        }
        //-=-=-=-=- otherwise we catch this error. 
      } catch (error) {
        Alert.alert("Error!", "Wrong email or password!")
      }
    } else {
      Alert.alert(`Missing Fields`)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In -=-=-=|</Text>
      <Input placeholder='Email' onChangeText={text => setEmail(text)} />
      <Input placeholder='Password' secureTextEntry={true} onChangeText={text => setPassword(text)} />
      <OurButton title='| Sign in' onPress={doLogin} />
      <View style={{ flexDirection: "row" }}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.dispatch(StackActions.replace("signup"))} >
          <Text style={{ color: colors.blue, fontSize: 15 }}>  | Sign up</Text>
        </TouchableOpacity>
      </View>
      <LevantiskCopyRight />
    </View >
  )
}
export default SignIn;

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