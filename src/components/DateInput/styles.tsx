import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    outlined:{
        backgroundColor: colors.white,
        borderWidth:1,
        borderColor:colors.grey,
        marginHorizontal:24,
        borderRadius:10,
        paddingHorizontal:24,
        paddingVertical:13,
        flexDirection:'row',
        alignItems:'center'
    },
    icon:{
        width:24,
        height:24,
        tintColor:colors.grey,
        marginRight:8,
    },
    text:{
        color:colors.grey,
        fontSize:15,
    }

});

export default styles;