import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/operations';
import lcss from './LoginForm.module.css'

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
      <div>
          <h1 className={lcss.rtitle}>Login form</h1>
          <form className={lcss.rform} onSubmit={handleSubmit}>
              <label className={lcss.rlabel} htmlFor=""> 
                  Email
                  <input className={lcss.rinput} type="email" name='email' />
              </label>
              <label className={lcss.rlabel} htmlFor="">
                  Password
                  <input className={lcss.rinput} type="password" name='password' />
              </label>
                <button className={lcss.rbtn}>Log in</button>
            </form>
    </div>
  );
};