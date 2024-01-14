import { router, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Login(){

    const {name} = useLocalSearchParams();

    return(
        <View style={styles.container}>
            <Text style={{alignSelf: "center"}}>Tela de login {name}</Text>
            <TouchableOpacity onPress={() => {router.back()}}><Text>VOLTAR</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
})