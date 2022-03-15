import axios from "axios"
import { baseURL } from "./contants"

export const api = axios.create({
  baseURL: baseURL,
})
