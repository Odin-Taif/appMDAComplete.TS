import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
//-===-=-=-=-=-=- style
import colors from '../../style/Colors'
const LevantiskCopyRight = () => {
    return (

        <View style={styles.container}>
            <Text> Developed by |</Text>
            <TouchableOpacity onPress={() => Linking.openURL('http://google.com')} >
                <Text style={{ color: colors.blue, fontSize: 10 }}> Levantisk.AB.©</Text>
            </TouchableOpacity>
        </View>


    )
}

export default LevantiskCopyRight;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        position: 'absolute',
        bottom: 60,
    }
})