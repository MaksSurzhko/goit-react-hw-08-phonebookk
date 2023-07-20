import { useAuth } from '../hooks/useAuth';
import css from './userMenu.module.css'
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

    return (
      
        <div className={css.box}>
            <p className={css.text}>Welcome, {user.name}</p>
            <button className={css.btn} onClick={handleLogOut}>
                Logout
            </button>
        </div>
  );
};

export default UserMenu;