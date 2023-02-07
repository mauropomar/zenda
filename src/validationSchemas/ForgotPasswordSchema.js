import * as yup from 'yup';

export const forgotPasswordValidationSchema = yup.object().shape({
    email: yup
    .string()
    .email('El correo es inválido')
    .required('Este campo es obligatorio')
})