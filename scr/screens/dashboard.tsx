import { StyleSheet, Text, View } from 'react-native'
import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react'

//-=-=-=-=-=-=-=-=-=-=-=-=-=-= components imports 
import Signout from '../screens/signout'
import { auth } from '../constant/firebase'



const Home: FunctionComponent<{}> = (props): ReactElement => {
  const [username, setUsername] = useState<string>('');
  // useEffect is called after the component is initially rendered and
  // after every other render
  useEffect(() => {
    // Since the async method Parse.User.currentAsync is needed to
    // retrieve the current user data, you need to declare an async
    // function here and call it afterwards
    async function getCurrentUser() {
      // This condition ensures that username is updated only if needed
      if (username === '') {
        const currentUser = await auth.currentUser;
        if (currentUser !== null) {
          setUsername(currentUser.email);
        }
      }
    }
    getCurrentUser();
  }, [username]);
  return (
    <View>
      <View>
        {username !== "" && <Text>{`Hello ${username}`}</Text>}
      </View>
      <Text>DashBoard jlkajsdlfkjaslkdfjalk welocome</Text>
      <Signout />
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({


})