
import React, { FunctionComponent } from 'react'
import { Dimensions, StyleSheet, Text, View, TextInput } from 'react-native'



// =-=-=-=-=-=- import style-=-=-=-=-=-=-
import Colors from '../../style/Colors';




const { height, width } = Dimensions.get("screen")
interface Props {
    placeholder: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}


const Input: FunctionComponent<Props> = (props) => {
    return (
        <View style={styles.container}>
            <TextInput autoCapitalize="none" autoCorrect={false} style={styles.input} placeholder={props.placeholder} secureTextEntry={props.secureTextEntry || false} onChangeText={props.onChangeText} />
        </View>
    )
}

export default Input;


const styles = StyleSheet.create({
    container: {
        width: width / 1.1,
        alignSelf: "center",
        backgroundColor: Colors.white,
        borderRadius: 5,
        marginVertical: 5,
    },
    input: {
        padding: 15,
    }
})