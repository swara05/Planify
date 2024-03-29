import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const Button = ({ onPress, style, children , type}) => {
  return (

    <TouchableOpacity onPress={onPress} style={[styles.container , type === 'blue' ? styles.blueBg : {}, style]}>
        <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
  )
}

export default Button;
