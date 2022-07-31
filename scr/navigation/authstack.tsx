//Discription--=-=-=-=-=- this component is the authuriztion page 
import React, { FunctionComponent, ReactElement, ReactNode } from 'react'
import { Signup, SignIn, Home } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';



//-=-=-=-=-=-=-= defining the navigation stack-=-=-=-=-=||||
const Stack = createStackNavigator();




const Authstack: FunctionComponent<{}> = (props): ReactElement => {

  return (

    <Stack.Navigator>
      <Stack.Screen name='signin' component={SignIn} />
      <Stack.Screen name='signup' component={Signup} />
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>


  )
}
export default Authstack;