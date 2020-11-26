import React, { Component } from 'react'
import ProtocolService from '../services/ProtocolService';

class CreateProtocolComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            codigo_ano: '',
            resumo: '',
            solicitante: ''
        }
        this.changeCodigoAnoHandler = this.changeCodigoAnoHandler.bind(this);
        this.changeResumoHandler = this.changeResumoHandler.bind(this);
        this.changeSolicitanteHandler = this.changeSolicitanteHandler.bind(this);
        this.addOrUpdate = this.addOrUpdate.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            ProtocolService.getProtocolById(this.state.id).then( (res) =>{
                let protocol = res.data;
                this.setState({codigo_ano: protocol.codigo_ano,
                    resumo: protocol.resumo,
                    solicitante : protocol.solicitante
                });
            });
        }        
    }
    addOrUpdate = (e) => {
        e.preventDefault();
        let Protocol = {codigo_ano: this.state.codigo_ano, resumo: this.state.resumo, solicitante: this.state.solicitante};
        console.log('Protocol => ' + JSON.stringify(Protocol));

        // step 5
        if(this.state.id === '_add'){
            ProtocolService.createProtocol(Protocol).then(res =>{
                this.props.history.push('/protocols');
            });
        }else{
            ProtocolService.updateProtocol(Protocol, this.state.id).then( res => {
                this.props.history.push('/protocols');
            });
        }
    }
    
    changeCodigoAnoHandler= (event) => {
        this.setState({codigo_ano: event.target.value});
    }

    changeResumoHandler= (event) => {
        this.setState({resumo: event.target.value});
    }

    changeSolicitanteHandler= (event) => {
        this.setState({solicitante: event.target.value});
    }

    cancel(){
        this.props.history.push('/protocols');
    }

    getTitulo(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Criar Protocolo</h3>
        }else{
            return <h3 className="text-center">Atualizar Protocolo</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitulo()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Código/Ano: </label>
                                            <input placeholder="Código/Ano" name="codigo_ano" className="form-control" 
                                                value={this.state.codigo_ano} onChange={this.changeCodigoAnoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Resumo: </label>
                                            <input placeholder="Resumo" name="resumo" className="form-control" 
                                                value={this.state.resumo} onChange={this.changeResumoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Solicitante: </label>
                                            <input placeholder="Solicitante" name="solicitante" className="form-control" 
                                                value={this.state.solicitante} onChange={this.changeSolicitanteHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.addOrUpdate}>Salvar</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateProtocolComponent