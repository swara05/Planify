import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    plus:{
        fontSize:32,
        marginTop:-2,
        color: colors.white,
        fontWeight:'600',
    },
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100,
        backgroundColor: colors.blue,
        width:60,
        height:60,
        position:'absolute',
        bottom:24,
        right:24,
    },
});

export default styles;