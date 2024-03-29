import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:colors.purple,
        borderRadius:3,
        height:18,
        width:18,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:2,
    },
    innerSquare:{
        backgroundColor:colors.purple,
        // borderRadius:3,
        height:10,
        width:10,
    },
    checkedBox:{
        borderWidth:2,
        
    }
});

export default styles;