import React, { Component } from 'react'
import ProtocolService from '../services/ProtocolService'

class ListProtocolComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                protocols: []
        }
        this.addProtocol = this.addProtocol.bind(this);
        this.editProtocol = this.editProtocol.bind(this);
        this.deleteProtocol = this.deleteProtocol.bind(this);
    }

    deleteProtocol(id){
        ProtocolService.deleteProtocol(id).then( res => {
            this.setState({protocols: this.state.protocols.filter(protocol => protocol.id !== id)});
        });
    }
    viewProtocol(id){
        this.props.history.push(`/view-protocol/${id}`);
    }
    editProtocol(id){
        this.props.history.push(`/add-protocol/${id}`);
    }

    componentDidMount(){
        ProtocolService.getProtocols().then((res) => {
            this.setState({ protocols: res.data});
        });
    }

    addProtocol(){
        this.props.history.push('/add-protocol/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Lista de Protocolos</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addProtocol}> Incluir Protocolo</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Protocolo - ID</th>
                                    <th> Protocolo - COD/ANO</th>
                                    <th> Protocolo - Solicitante</th>
                                    <th> Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.protocols.map(
                                        protocol => 
                                        <tr key = {protocol.id}>
                                             <td> {protocol.id} </td>   
                                             <td> {protocol.codigo_ano}</td>
                                             <td> {protocol.solicitante}</td>
                                             <td>
                                                 <button onClick={ () => this.editProtocol(protocol.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProtocol(protocol.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewProtocol(protocol.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListProtocolComponent