import * as yup from 'yup';

export const advanceValidationSchema = yup.object().shape({
    value: yup
        .number()
        .typeError('Este campo solo puede contener números')
        .required('Este campo es obligatorio')
})