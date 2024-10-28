import styles from './App.module.css';
import { FaTwitch } from 'react-icons/fa';
import UserPage from './pages/UserPage';

function App () {
  return (
    <div className={styles.formContainer}>
      <h1>
        Добавить пользователя Twitch{' '}
        <span className={styles.twithIcon}>
          <FaTwitch />
        </span>
      </h1>
      <UserPage />
    </div>
  );
}

export default App;
