import React from 'react';
import { FlatList, Text, View } from 'react-native';
import style from './style'


const Historico = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={style.item}>{item.key}</Text>}
        />
      </View>
    );
  }
  
  export default Historico;