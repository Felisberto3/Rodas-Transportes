import { Pagamento } from '@prisma/client'
interface createPagamentoDto {
    numeroDeFactura: string;
    formaDePagamento: "multicaixa" | "deposito";
    quantidade: number;
    mes: string;
    alunoId: number | null;
    secretarioId: number | null;
    propinaId: number | null;
    multaId: number | null;
    descontoId: number | null;
}

interface updatePagamentoDto {
    numeroDeFactura: string;
    formaDePagamento: "multicaixa" | "deposito";
    quantidade: number;
    mes: string;
    alunoId: number | null;
    secretarioId: number | null;
    propinaId: number | null;
    multaId: number | null;
    descontoId: number | null;
}


interface PagamentorepositoryDto {
    create(data: createPagamentoDto): Promise<Pagamento>
    get(numeroDeFactura: string): Promise<Pagamento | Pagamento[] | null>
    delete(numeroDeFactura: string): Promise<Boolean>
    update(data: updatePagamentoDto): Promise<Boolean>
}


export { PagamentorepositoryDto, createPagamentoDto, updatePagamentoDto }