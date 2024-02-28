import * as yup from 'yup'
const createsecretarioSchema = yup.object({
    primeiroNome: yup.string().required(),
    sobrenome: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    mainAdmin: yup.boolean().required(),
    addressId: yup.number()
})

const createPropinaSchema = yup.object({
    valor: yup.number().required(),
    descricao: yup.string().required(),
})


const createAddressSchema = yup.object({
    provincia: yup.string().required(),
    municipio: yup.string().required(),
    bairro: yup.string().required(),
    rua: yup.string().required()
})

const createAlunoSchema = yup.object({
    nomeCompleto: yup.string().required(),
    email: yup.string().email(),
    processo: yup.string().required(),
    BI: yup.string().required(),
    classe: yup.string().required(),
    turma: yup.string().required(),
    dataNascimento: yup.string().required(),
    adress_id: yup.string().required(),
    addressId: yup.number()
})



export { createsecretarioSchema, createPropinaSchema, createAddressSchema, createAlunoSchema }