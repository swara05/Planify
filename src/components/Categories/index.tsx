import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles';

const Categories = ({categories,selectedCategory,onCategoryPress}) => {
    return (
        <FlatList
            horizontal
            data={categories}
            keyExtractor={item => String(item?.value)}
            style={{marginTop:12}}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index}) => {
                const selected = selectedCategory === item?.value;
                const displayName = item?.label;
                const isLastItem = index === categories.length - 1;

                return(
                    <TouchableOpacity onPress={() => onCategoryPress(item?.value)}  
                    style={[styles.itemContainer,
                     selected ? styles.selectedItemContainer : {}, 
                     index === 0 ? {marginLeft:24} : {},
                     isLastItem ? { marginRight: 24 } : {},
                    ]}>
                        <Text style={[styles.item,selected? styles.selectedItem : {}]}>{displayName}</Text>
                    </TouchableOpacity>
                );
            
            }}

        />

    );
};

export default React.memo(Categories);