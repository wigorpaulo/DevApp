import React from "react";

import LayoutDashComponent from "../../../components/layoutDashComponent/LayoutDashComponent";
import CardContainer from "../../../components/cardContainer/CardContainer";
import ReleaseApi from "../../../api/ReleaseApi";
import Table from "../../../components/table/Table";

const Release = () => {

    const [releases, setReleases] = React.useState([])

    React.useEffect(() => {
        ReleaseApi.getAll()
            .then(resp => {
                setReleases(resp.data.response.releases)
            })
    }, [])


    return (
        <LayoutDashComponent>
            <CardContainer>
                <Table
                    headers={
                        [
                            { value: 'Usuário' },
                            { value: 'Valor' },
                            { value: 'Tipo release', center: true },
                            { value: 'Descrição' },
                            { value: 'Data', center: true }
                        ]
                    }
                >
                    {
                        releases.map((item, index) => (
                            <tr key={index}>

                                <td>{item.username}</td>
                                <td><strong>R$ {item.value}</strong></td>

                                <td className="text-center">

                                    {(() => {
                                        if (item.operation_type == 1) {
                                            return (
                                                <span className="badge bg-success">CRIADO</span>
                                            )
                                        } else if (item.operation_type == 2) {
                                            return (
                                                <span className="badge bg-primary">EDITADO</span>
                                            )
                                        } else {
                                            return (
                                                <span className="badge bg-danger">EXCLUIDO</span>
                                            )
                                        }
                                    })()}

                                    {/* {item.operation_type == 1 ?
                                        <span className="badge bg-success">CRIADO</span>
                                        :
                                        <span className="badge bg-primary">EDITADO</span>} */}
                                </td>

                                <td>{item.description}</td>
                                <td className="text-center">{item.created_at}</td>

                            </tr>
                        ))
                    }
                </Table>
            </CardContainer>
        </LayoutDashComponent>
    )

}

export default Release