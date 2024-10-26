import styles from './App.module.css';
import UserPage from './pages/UserPage';

function App () {
  return (
    <div className={styles.formContainer}>
      <h1>Добавить пользавателя Twitch</h1>
      <UserPage />
    </div>
  );
}

export default App;
