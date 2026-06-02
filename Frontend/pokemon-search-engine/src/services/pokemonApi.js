import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 10000,
})

export async function getPokemon(name) {
  const normalized = name.trim().toLowerCase()
  const response = await api.get(`/pokemon/${encodeURIComponent(normalized)}`)
  return response.data
}
