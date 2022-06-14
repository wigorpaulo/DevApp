import { View, TextInput } from "react-native"

const Input = (props) => {

    return (
        <View>
            <TextInput
                style={{
                    padding: 15,
                    marginBottom: 20,
                    borderWidth: 0.5,
                    borderColor: 'black',
                    borderRadius: 5,
                    width: 300
                }}
                secureTextEntry={props.password}
                onChangeText={props.onChange}
                value={props.value}
                placeholder={props.placeholder}
            />
        </View>
    )

}

export default Input