import { Calendario } from '@prisma/client'
interface createCalendarioDto {
    data: Date;
    alunoId: number;
}

interface updateCalendarioDto {
    id: number;
    data: Date;
    alunoId: number;
}


interface CalendariorepositoryDto {
    create(data: createCalendarioDto): Promise<Calendario>
    get(id: number): Promise<Calendario | Calendario[] | null>
    delete(id: number): Promise<Boolean>
    update(data: updateCalendarioDto): Promise<Boolean>
}


export { CalendariorepositoryDto, createCalendarioDto, updateCalendarioDto }