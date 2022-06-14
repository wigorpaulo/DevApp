import React from 'react'
import { View, Text, FlatList } from 'react-native'

import ReleaseApi from '../../../../api/ReleaseApi';

const List = (props) => {

    const [releases, setReleases] = React.useState([])

    React.useEffect(() => {
        ReleaseApi.getAll()
            .then(resp => {
                setReleases(resp.data.response.releases)
            })
    }, []);

    const operationType = (operation_type) => {
        if (operation_type == 1) {
            return 'CRIADO'
        } else if (operation_type == 2) {
            return 'EDITADO'
        } else {
            return 'DELETADO'
        }
    }

    return (
        <View>

            <FlatList
                data={releases}
                renderItem={({ item }) => (

                    <View style={{
                        display: 'flex',
                        alignItems: 'center',
                        margin: 5,
                        padding: 15,
                        backgroundColor: 'white'
                    }}>
                        <Text>{item.username}   -   R$ {item.value}   -   {item.created_at}</Text>
                        <Text
                            style={{
                                backgroundColor: 'black',
                                color: 'white',
                                padding: 10,
                                margin: 7,
                                borderRadius: 5
                            }}
                        >
                            {
                                operationType(item.operation_type)
                            }
                        </Text>
                        <Text>{item.description}</Text>
                    </View>

                )}
            />

        </View>
    )

}

export default List