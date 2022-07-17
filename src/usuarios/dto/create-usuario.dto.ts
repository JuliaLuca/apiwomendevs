import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUsuarioDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: 'Julia',
        description: 'Nome da pessoa que esta sendo cadastrada',
    })
    nome: string;

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
        example: 'juju@WomenDevs.com',
        description: 'Email da pessoa cadastrada',
    })
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: '(99) 98753-8745',
        description: 'Numero de celular da pessoa cadastrada',
    })
    celular: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: 'Eu possuo disponibilidade e força de vontade para esta me dedicando e estudando 100% programação',
        description: 'Descrição sobre o motivo que fez a pessoa se cadastra',
    })
    descricao: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: 'Possuo conhecimento nas linguagens de Java e JavaScript mas não sei como funciona banco de dados',
        description: 'Descrição sobre os conhecimentos sobre programação da pessoa que esta se cadastrando',
    })
    conhecimento: string;

    @IsString() 
    @IsNotEmpty()
    @ApiProperty({
        example: '21/06/2002',
        description: 'data de nascimento do candidato.',
    })
    nascimento: string;
}
