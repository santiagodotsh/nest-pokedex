import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { AxiosAdapter } from '../common/adapters/axios.adapter'
import { Pokemon } from '../pokemon/entities/pokemon.entity'
import { PokeResponse } from './interfaces/poke-response.interface'

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,

    private readonly http: AxiosAdapter
  ) {}
  
  async executeSeed() {
    await this.pokemonModel.deleteMany()

    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650')
    
    const pokemonToInsert: { no: number, name: string }[] = []

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/')
      const no = +segments[segments.length - 2]

      pokemonToInsert.push({ no, name })
    })

    await this.pokemonModel.insertMany(pokemonToInsert)

    return 'SEED executed'
  }
}
