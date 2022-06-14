import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../pages/auth/login/Login'
import Home from '../pages/dash/home/Home'
import Create from '../pages/dash/transactions/Create'
import List from '../pages/dash/transactions/List'
import Register from '../pages/auth/register/Register'
import ListRelease from '../pages/dash/releases/List'

const MainStack = createStackNavigator()

export default () => (
    <MainStack.Navigator>
        <MainStack.Screen name="Login" component={Login} options={{
            title: 'Login'
        }} />

        <MainStack.Screen name='register' component={Register} options={{
            title: 'Cadastre-se', headerLeft: null
        }} />

        <MainStack.Screen name='finGestor' component={Home} options={{
            headerLeft: null
        }} />

        <MainStack.Screen name='CreateTransaction' component={Create} options={{
            title: 'Adicionar Transação'
        }} />

        <MainStack.Screen name='ListTransaction' component={List} options={{
            title: 'Lista de Transações'
        }} />

        <MainStack.Screen name='Releases' component={ListRelease} options={{
            title: 'Lançamentos'
        }}/>
    </MainStack.Navigator>
)