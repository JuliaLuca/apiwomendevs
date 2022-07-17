import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  @ApiOperation({
    summary: 'Cria um novo cadastro',
})
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return await this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  @ApiOperation({
    summary: 'retorna todos os cadastros',
})
  async findAll() {
    return await this.usuariosService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retorna um cadastro por id',
})
  async findOne(@Param('id') id: string) {
    return await this.usuariosService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza um cadastro por id',
})
  async update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return await this.usuariosService.update(id, updateUsuarioDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deleta um cadastro por id',
})
  async remove(@Param('id') id: string) {
    return await this.usuariosService.remove(id);
  }
}
