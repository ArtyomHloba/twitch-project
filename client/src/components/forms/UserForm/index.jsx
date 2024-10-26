import { Formik, Form, Field, ErrorMessage } from 'formik';
import { USER_VALIDATION_SCHEMA } from '../../../utils/validationSchemas';
import styles from './UserForm.module.css';
function UserForm () {
  const initialValues = {
    nickname: '',
    name: '',
  };

  const handleSubmit = (values, formikBag) => {
    console.log('values :>> ', values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_VALIDATION_SCHEMA}
    >
      {formikProps => (
        <Form className={styles.form}>
          <div>
            <label htmlFor='nickname'>Ник на Twitch: </label>
            <Field
              type='text'
              name='nickname'
              placeholder='Введите ваш ник Twitch'
            />
            <ErrorMessage
              name='nickname'
              component='div'
              className={styles.error}
            />
          </div>
          <div>
            <label htmlFor='name'>Реальное имя: </label>
            <Field type='text' name='name' placeholder='Введите реальное имя' />
            <ErrorMessage
              name='name'
              component='div'
              className={styles.error}
            />
          </div>
          <button type='submit'>Save</button>
        </Form>
      )}
    </Formik>
  );
}

export default UserForm;
