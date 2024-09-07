import { join } from 'path'
import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { CommonModule } from './common/common.module'
import { PokemonModule } from './pokemon/pokemon.module'
import { SeedModule } from './seed/seed.module'
import { JoiValidationSchema } from './config/joi.validaton'

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: JoiValidationSchema
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public')
    }),
    MongooseModule.forRoot(process.env.MONGODB, {
      dbName: 'nest-pokemon'
    }),
    PokemonModule,
    CommonModule,
    SeedModule
  ]
})
export class AppModule {}
