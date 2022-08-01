//Discription--=-=-=-=-=- this component is the authuriztion page 
import React, { FunctionComponent, ReactElement, ReactNode } from 'react'
import { SignIn, Home } from '../screens/index';
import { createStackNavigator } from '@react-navigation/stack';



//-=-=-=-=-=-=-= defining the navigation stack-=-=-=-=-=||||
const Stack = createStackNavigator();




const AppStack: FunctionComponent<{}> = (props): ReactElement => {

    return (

        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name='Sign In' component={SignIn} />
        </Stack.Navigator>


    )
}
export default AppStack;