import * as yup from 'yup';

export const registerValidationSchema = yup.object().shape({
    name: yup
    .string()
    .required('Este campo es obligatorio'),
    lastName: yup
    .string()
    .required('Este campo es obligatorio'),
    email: yup
    .string()
    .email('El correo es inválido')
    .required('Este campo es obligatorio'),
    password: yup  
     .string()
     .min(5, 'No debe ser menor de 5 carácteres')
     .max(100, 'No debe exceder de 100 carácteres') 
     .required('Este campo es obligatorio'),
    confirmpassword: yup  
     .string()
     .min(5, 'No debe ser menor de 5 carácteres')
     .max(100, 'No debe exceder de 100 carácteres') 
     .required('Este campo es obligatorio') 
})