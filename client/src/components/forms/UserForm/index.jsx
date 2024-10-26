import { Formik, Form, Field } from 'formik';
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
          <Field
            label='Nickname:'
            type='text'
            name='nickname'
            placeholder='Yournickname'
          />
          <button type='submit'>Save</button>
        </Form>
      )}
    </Formik>
  );
}

export default UserForm;
