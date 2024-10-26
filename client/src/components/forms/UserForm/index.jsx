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
            <label htmlFor='nickname'>Nick name:</label>
            <Field type='text' name='nickname' placeholder='Your nickname' />
            <ErrorMessage
              name='nickname'
              component='div'
              className={styles.error}
            />
          </div>
          <div>
            <label htmlFor='name'>Name:</label>
            <Field type='text' name='name' placeholder='Your name' />
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
