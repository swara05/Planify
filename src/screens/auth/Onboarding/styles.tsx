import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../../constants/colors';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        // flex:1,
    },
    image:{
        width:'100%',
        height: (height/3) * 2,
        // flex:1,
    },
    footer:{
        position:'absolute',
        bottom:0,
        height:40,
        width:'100%',
        backgroundColor:colors.white,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },

    content:{
        padding: 46,
        paddingTop:0,
        backgroundColor:colors.white,
    },
    title:{
        color: colors.black,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:22,
    },
    subtitle:{
        color: colors.grey,
        textAlign:'center',
        fontSize:15,
        marginVertical:16,
    },
});

export default styles;