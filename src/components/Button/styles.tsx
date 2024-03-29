import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.purple,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        borderRadius:10,
        padding:13,
        marginVertical:8,
    },
    title:{
        color: colors.white,
        fontSize:16,
        fontWeight:'bold',
    },
    blueBg:{
        backgroundColor:colors.blue,
    }
});

export default styles;