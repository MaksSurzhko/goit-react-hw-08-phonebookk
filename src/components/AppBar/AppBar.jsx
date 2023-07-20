import { Navigation } from '../navigation/navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import UserMenu from '../userMenu/userMenu';
import { useAuth } from '../hooks/useAuth';
import acss from './AppBar.module.css'

const AppBar = () => {
  const { isLoggedIn } = useAuth();

    return (
        <header className={acss.head} >
            <Navigation />
       {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
  );
};

export default AppBar;