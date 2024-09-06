import { Injectable } from '@nestjs/common'
import axios, { type AxiosInstance } from 'axios'
import { PokeResponse } from './interfaces/poke-response.interface'

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios
  
  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650')
    
    data.results.forEach(({ url }) => {
      const segments = url.split('/')
      const no = +segments[segments.length - 2]
      console.log('🐈 ~ SeedService ~ data.results.forEach ~ no:', no)
    })

    return data.results
  }
}
