import React from 'react'
import { View, Text } from 'react-native'

const NavComponent = (props) => {

    return (
        <Text
            style={{
                backgroundColor: `${props.color}`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
                color: 'white',
                width: '100%',
                fontSize: 18
            }}
            onPress={props.onPress}
        >{props.title}</Text>
    )

}

export default NavComponent