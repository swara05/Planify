import { StyleSheet } from 'react-native'
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    container:{
    },
    backContainer:{
        padding:24,
    },
    icon:{
        width:20,
        height:20,
        tintColor:colors.purple,
    },
    label:{
        fontSize:14,
        color: colors.black,
        marginHorizontal:24,
        fontWeight:'500',
        marginTop:12,
    },
    button:{
        margin:24,
    }
});

export default styles;