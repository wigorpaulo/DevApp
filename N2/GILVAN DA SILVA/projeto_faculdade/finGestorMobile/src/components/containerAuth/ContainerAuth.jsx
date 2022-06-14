import { View } from "react-native"

import Style from "./Style"

const ContainerAuth = (props) => {

    return (
        <View style={Style.container}>
            {props.children}
        </View>
    )

}

export default ContainerAuth