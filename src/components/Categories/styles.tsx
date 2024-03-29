import { StyleSheet } from 'react-native'
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    item:{
        fontSize:12,
        color:colors.blue,
        fontWeight:'bold',
        padding:8,
        paddingHorizontal:12,
        borderRadius:8,
        borderWidth:1,
        borderColor:colors.blue,
        textTransform: 'capitalize',
    },
    selectedItem:{
        color:colors.blue,
    },
    itemContainer:{
        marginBottom:14,
        marginRight:8,
        borderColor:colors.blue,
        borderRadius:8,
        borderWidth:1,
    },
    selectedItemContainer:{
        backgroundColor: colors.lightGrey,
        borderColor:colors.lightGrey
    },
})

export default styles;
