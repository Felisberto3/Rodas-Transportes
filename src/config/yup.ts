import * as yup from 'yup'
const createsecretarioSchema = yup.object({
    primeiroNome: yup.string().required(),
    sobrenome:yup.string().required(),
    email:yup.string().required(),
    password:yup.string().required(),
    mainAdmin: yup.boolean().required(),
    addressId: yup.number()
})

export { createsecretarioSchema }