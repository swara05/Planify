import { StyleSheet } from 'react-native'
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:24,
    },
    footerText:{
        textAlign:'center',
        color:colors.grey,
        fontSize:15,
        marginTop:28,
    },
    footerLink:{
        color:colors.purple,
        fontWeight:'bold'
    }
});

export default styles;