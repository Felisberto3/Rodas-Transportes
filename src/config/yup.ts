import * as yup from 'yup'
const createsecretarioSchema = yup.object({
    primeiroNome: yup.string().required(),
    sobrenome:yup.string().required(),
    email:yup.string().email().required(),
    password:yup.string().required(),
    mainAdmin: yup.boolean().required(),
    addressId: yup.number()
})

const createPropinaSchema = yup.object({
    valor: yup.number().required(),
    descricao:yup.string().required(),  
})

export { createsecretarioSchema, createPropinaSchema }