import axios from "axios";

const api = axios.create({
    baseURL: 'https://farmacia-jjxo.onrender.com/produtos'
})

export const cadastrarProduto = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}