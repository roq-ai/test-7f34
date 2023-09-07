import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().integer().required(),
  description: yup.string().nullable(),
  category: yup.string().nullable(),
  organization_id: yup.string().nullable().required(),
});
