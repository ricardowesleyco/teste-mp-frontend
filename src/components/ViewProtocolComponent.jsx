import React, { Component } from 'react'
import ProtocolService from '../services/ProtocolService'

class ViewProtocolComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            protocol: {}
        }
    }

    componentDidMount(){
        ProtocolService.getProtocolById(this.state.id).then( res => {
            this.setState({protocol: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Protocol Detalhes</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Protocol - Código/Ano: </label>
                            <div> { this.state.protocol.codigo_ano }</div>
                        </div>
                        <div className = "row">
                            <label> Protocol Resumo: </label>
                            <div> { this.state.protocol.resumo }</div>
                        </div>
                        <div className = "row">
                            <label> Protocol Solicitante: </label>
                            <div> { this.state.protocol.solicitante }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewProtocolComponent