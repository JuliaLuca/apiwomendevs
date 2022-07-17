import { Injectable, NotFoundException } from '@nestjs/common';
import { Usuarios } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(private readonly prisma: PrismaService) {}

  async verifyIdAndReturnUser(id: string): Promise<Usuarios> {
    const usuarios: Usuarios = await this.prisma.usuarios.findUnique({
        where: { id },
    });

    if (!usuarios) {
        throw new NotFoundException(`Id: '${id}' Nao encontrado!`);
    }

    return usuarios;
}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuarios | void> {
    return await this.prisma.usuarios.create({ data: createUsuarioDto });
  }

  async findAll(): Promise <Usuarios[]> {
    return await this.prisma.usuarios.findMany();
  }

  async findOne(id: string): Promise<Usuarios> {
    return await this.verifyIdAndReturnUser(id);
}

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuarios | void> {
    await this.verifyIdAndReturnUser(id);
    return await this.prisma.usuarios.update({ where: { id }, data: updateUsuarioDto })
  }

  async remove(id: string) {
    await this.verifyIdAndReturnUser(id);
    return await this.prisma.usuarios.delete({ where: { id } });
  }
}
