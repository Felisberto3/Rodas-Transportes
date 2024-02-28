import { Aluno } from '@prisma/client'
interface createAlunoDto {
    nomeCompleto: string;
    email: string | null;
    BI: string;
    processo: string;
    classe: string;
    turma: string;
    dataNascimento: string;
    adress_id: string;
    addressId: number | null
}

interface updateAlunoDto {
    id: number;
    nomeCompleto?: string;
    email?: string | null;
    processo?: string;
    classe?: string;
    turma?: string;
    dataNascimento?: string;
    adress_id?: string;
    addressId?: number | null
}


interface AlunorepositoryDto {
    create(data: createAlunoDto): Promise<Aluno>
    get(id: number): Promise<Aluno | Aluno[] | null>
    delete(id: number): Promise<Boolean>
    update(data: updateAlunoDto): Promise<Boolean>
}


export { AlunorepositoryDto, createAlunoDto, updateAlunoDto }