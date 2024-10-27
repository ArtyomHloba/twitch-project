import { useEffect } from 'react';
import { connect } from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';
import styles from './UsersList.module.css';
import { getUsersThunk } from './../../store/slices/usersSlice';

export const UsersList = ({ users, isFetching, error, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <section className={styles.listContainer}>
      <BeatLoader loading={isFetching} />
      {error && <div>Что-то пошло не так...</div>}
      <ul>
        {users.map(u => (
          <li key={u.id}>
            <p>
              Ник: {u.nickname} Имя: {u.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = ({ usersData }) => usersData;

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsersThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
