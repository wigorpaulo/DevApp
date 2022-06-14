import React from 'react'
import { View } from 'react-native'
import NavComponent from '../../../components/navComponent/NavComponent'

const Home = (props) => {

    return (
        <View>
            <NavComponent
                title="Adicionar Transação"
                color="blue"
                onPress={() => { props.navigation.navigate('CreateTransaction') }}
            />

            <NavComponent
                title="Todas as Transações"
                color="#1E90FF"
                onPress={() => { props.navigation.navigate('ListTransaction') }}
            />

            <NavComponent
                title="Lançamentos"
                color="#87CEFA"
                onPress={() => { props.navigation.navigate('Releases') }}
            />
        </View>
    )

}

export default Home