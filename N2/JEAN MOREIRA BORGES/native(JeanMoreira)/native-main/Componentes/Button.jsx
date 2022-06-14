import React from 'react';
import { Button } from 'react-native';

const ButtonComp = (props) => {
  return(
    <Button
          title={props.acao}
          onPress={props.metodo}
        />
  )
}

export default ButtonComp