import { Formik, Form, Field, ErrorMessage } from 'formik';
import { USER_VALIDATION_SCHEMA } from '../../../utils/validationSchemas';
import styles from './UserForm.module.css';
import { createUserThunk } from '../../../store/slices/usersSlice';
import { connect } from 'react-redux';

function UserForm ({ createUser }) {
  const initialValues = {
    nickname: '',
    name: '',
  };

  const handleSubmit = (values, formikBag) => {
    const formData = new FormData();
    formData.append('nickname', values.nickname);
    formData.append('name', values.name);
    createUser(formData);
    formikBag.resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={USER_VALIDATION_SCHEMA}
      >
        <Form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor='nickname'>Ник на Twitch:</label>
            <Field type='text' name='nickname' placeholder='Ваш ник' />
            <ErrorMessage
              name='nickname'
              component='div'
              className={styles.error}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor='name'>Реальное имя:</label>
            <Field type='text' name='name' placeholder='Ваше имя' />
            <ErrorMessage
              name='name'
              component='div'
              className={styles.error}
            />
          </div>
          <button type='submit' className={styles.subBtn}>
            Добавить
          </button>
        </Form>
      </Formik>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  createUser: values => dispatch(createUserThunk(values)),
});

export default connect(null, mapDispatchToProps)(UserForm);
