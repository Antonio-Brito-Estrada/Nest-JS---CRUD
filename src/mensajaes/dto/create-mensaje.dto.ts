import { ApiProperty } from "@nestjs/swagger";

export class CreateMensajeDto {

    @ApiProperty({ example: 'tony', description: 'Medio de comunicación' })
    nick: string;
    @ApiProperty({ example: 'Hola esta es una prueba', description: 'Medio de comunicación' })
    mensaje: string;

}
