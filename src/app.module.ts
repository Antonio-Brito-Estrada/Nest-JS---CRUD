import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensajaesController } from './mensajaes/mensajaes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensajaesService } from './mensajaes/mensajaes.service';
import { Mensaje } from './mensajaes/entities/mensaje.entity';

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'nest',
    password: '123',
    database: 'sendmeapp_db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([
    Mensaje // para que la puedan utilizar todos los modulos
  ]) 
],
  controllers: [AppController, MensajaesController],
  providers: [AppService, MensajaesService],
})
export class AppModule {}
