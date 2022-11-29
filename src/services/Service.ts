import { SettingsSystemDaydreamOutlined } from "@mui/icons-material";
import axios from "axios";
import { url } from "inspector";

export const api = axios.create({
    baseURL: 'https://bloggeneration.herokuapp.com'
})
export const login = async (url:any, dados:any,SetDado:any) =>{ const resposta = await api.post(url,dados)
    SetDado(resposta.data.token)
}