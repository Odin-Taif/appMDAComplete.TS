import { StyleSheet, Text, View } from 'react-native'
import React, { FunctionComponent, ReactElement, useEffect, useState, useContext } from 'react'
import { UserContext } from '../../App'


//-=-=-=-=-=-=-=-=-=-=-=-=-=-= components imports 
import Signout from './signout'
import DrawerNavigator from '../components/DrawerComponents/DrawerNavigator'
import { auth } from '../constant/firebase'
import { async } from '@firebase/util'



// this user type, because we know ahead of us what data type will be fetched.
type User = {
  id?: number;
  name?: string;
  email?: string;
};

const Home: FunctionComponent<{}> = (props): ReactElement => {
  const [username, setUsername] = useState<string>('');
  const user: User = useContext(UserContext);
  // useEffect is called after the component is initially rendered and
  // after every other render
  // Since the async method Parse.User.currentAsync is needed to
  // retrieve the current user data, you need to declare an async
  // function here and call it afterwards
  useEffect(() => {
    const getCurrentUser = async () => {
      // This condition ensures that username is updated only if needed
      if (username === '') {
        const currentUser = await user.email;
        if (currentUser !== null) {
          setUsername(currentUser)
        }
      }
    }
    getCurrentUser();
  }, [username]);
  return (
    <View style={{ flex: 1 }}>
      <DrawerNavigator />
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({


})