import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

const getStyles = (type) => StyleSheet.create({
    container:{
        backgroundColor: type === 'error' ? colors.lightred : colors.lightGrey,
        borderRadius:15,
        padding:12,
        marginRight:14,
        width:'30%'
    },
    label:{
        marginBottom:13,
        fontSize:10,
        color: type === 'error' ? colors.red : colors.blue,
    },
    count:{
        fontSize:20,
        fontWeight:'500',
        color: type === 'error' ? colors.red : colors.blue,
        marginBottom:8,
    }
});

export default getStyles;