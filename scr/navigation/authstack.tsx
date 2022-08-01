//Discription--=-=-=-=-=- this component is the authuriztion page 
import React, { FunctionComponent, ReactElement, ReactNode } from 'react'
import { Signup, SignIn, Home } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';



//-=-=-=-=-=-=-= defining the navigation stack-=-=-=-=-=||||
const Stack = createStackNavigator();




const Authstack: FunctionComponent<{}> = (props): ReactElement => {

  return (

    <Stack.Navigator>
      <Stack.Screen name='Sign In' component={SignIn} />
      <Stack.Screen name='Sign Up' component={Signup} />
    </Stack.Navigator>


  )
}
export default Authstack;