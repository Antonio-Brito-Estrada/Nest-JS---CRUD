import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje.dto';
import { MensajaesService } from './mensajaes.service';
import { ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';

@Controller('message')
export class MensajaesController {
    
    // inyeccion de dependencia
    constructor(private mensajesService: MensajaesService){

    }

    @ApiTags('Create message')
    @Post("createMessage")
    @ApiBody({description: 'Crear mensaje.', type: CreateMensajeDto})
    @ApiCreatedResponse({ description: 'Mensaje enviado con éxito.'})
    @ApiForbiddenResponse({ description: 'Ocurrio un problema, favor de comunicarse con el administrador.' })
    create(@Body() createMensajeDto: CreateMensajeDto, @Res() response) {
      this.mensajesService.createMessage(createMensajeDto).then(mensaje => {
        response.status(HttpStatus.CREATED).json(mensaje);
      }).catch(() => {
        response.status(HttpStatus.FORBIDDEN).json({mensaje: 'error en la creación del mensaje'});
      })
    }

    @ApiTags('Get all message')
    @ApiBody({description: 'Objeto todos los mensajes.'})
    @Get("getAll")
    getAll(@Res() response) {
        this.mensajesService.getAll().then(mensajeList => {
            response.status(HttpStatus.OK).json(mensajeList);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'error al obtener todos los mensaje'})
        });
    }

    @ApiTags('Update message')
    @ApiBody({description: 'Actualizar mensaje.'})
    @Put("updateMessage/:id")
    update(@Param('id') idMensaje: number, @Body() updateMensajeDto: CreateMensajeDto, @Res() response){
        this.mensajesService.updateMessage(idMensaje, updateMensajeDto).then(mensaje => {
            response.status(HttpStatus.OK).json(mensaje);
          }).catch(() => {
              response.status(HttpStatus.FORBIDDEN).json({mensaje: 'error al editar del mensaje'});
          })
    }

    @ApiTags('Delete message')
    @ApiBody({description: 'Eliminar el mensaje.'})
    @Delete("delete/:id")
    deleteMessage(@Param('id') idMensaje: number, @Res() response) {
        this.mensajesService.deleteMessage(idMensaje).then(res => {
            response.status(HttpStatus.OK).json(res);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'error al eliminar los mensaje'})
        });
    }

}
