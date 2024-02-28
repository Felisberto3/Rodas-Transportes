import { prisma } from "../../../config/prisma";
import { PagamentorepositoryDto, createPagamentoDto, updatePagamentoDto } from "./interface";
import { Pagamento } from "@prisma/client";

class PagamentoRepository implements PagamentorepositoryDto {
    async create(data: createPagamentoDto): Promise<Pagamento> {
        return await prisma.pagamento.create({ data })
    }


    async get(numeroDeFactura: string): Promise<Pagamento | Pagamento[] | null> {
        if (!numeroDeFactura) {
            return await prisma.pagamento.findMany()
        }
        return await prisma.pagamento.findFirst({ where: { numeroDeFactura } })
    }

    async update({ numeroDeFactura, ...data}: updatePagamentoDto): Promise<Boolean > {
        await prisma.pagamento.update({ where: { numeroDeFactura  }, data })
        return true
    }
    async delete(numeroDeFactura: string): Promise<Boolean> {
        await prisma.pagamento.delete({ where: { numeroDeFactura } })
        return true
    }
}

export { PagamentoRepository }