import axios from 'axios';

const PROTOCOLO_API_BASE_URL = "http://localhost:8080/api/protocolo";

class ProtocolService {

    getProtocols(){
        return axios.get(PROTOCOLO_API_BASE_URL);
    }

    createProtocol(Protocolo){
        return axios.post(PROTOCOLO_API_BASE_URL, Protocolo).then(res=> {
            console.log(res)
        })
        .catch(error =>{
            if (error.response.status = 500) {
                alert("Não foi possível criar o novo protocolo. Verifique se o código/ano já está em utilização.")
            }
        });
    }

    getProtocolById(ProtocoloId){
        return axios.get(PROTOCOLO_API_BASE_URL + '/' + ProtocoloId);
    }

    updateProtocol(Protocolo, ProtocoloId){
        return axios.put(PROTOCOLO_API_BASE_URL + '/' + ProtocoloId, Protocolo);
    }

    deleteProtocol(ProtocoloId){
        return axios.delete(PROTOCOLO_API_BASE_URL + '/' + ProtocoloId);
    }
}

export default new ProtocolService()