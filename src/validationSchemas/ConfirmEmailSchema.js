import * as yup from 'yup';

export const confirmEmailValidationSchema = yup.object().shape({
    email: yup
    .string()
    .email('El correo es inválido')
    .required('Este campo es obligatorio'),
    code: yup  
     .string()
     .min(5, 'No debe tener menos de 5 carácteres') 
     .max(8, 'No debe exceder de 8 carácteres') 
     .required('Este campo es obligatorio')
})