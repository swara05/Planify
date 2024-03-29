import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    icon:{
        width:20,
        height:20,
        tintColor:colors.purple,
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:24,
    },
    title:{
        fontSize:16,
        color: colors.purple,
        fontWeight:'500'
    }
});

export default styles;