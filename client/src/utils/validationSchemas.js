import * as yup from 'yup';

export const USER_VALIDATION_SCHEMA = yup.object({
  nickname: yup.string().min(3).max(50).required('Это поле обязательное!'),
  name: yup.string().min(3).max(50).required('Это поле ТОЖЕ обязательное!'),
});
