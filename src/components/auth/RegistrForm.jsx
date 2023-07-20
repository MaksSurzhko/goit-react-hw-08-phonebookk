import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
import rcss from './LoginForm.module.css'

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={rcss.rbox}>
      
          <h2 className={rcss.rtitle}>Sign up form</h2>
          <form className={rcss.rform} onSubmit={handleSubmit}>
              <label className={rcss.rlabel}>
                  Name
                  <input className={rcss.rinput} type="text" name='name'/>
              </label>
              <label className={rcss.rlabel}>
                  Email
                  <input className={rcss.rinput} type="email" name='email' />
              </label>
              <label className={rcss.rlabel}>
                  Password
                  <input className={rcss.rinput} type="password" name='password'/>
              </label>
              <button type='submit' className={rcss.rbtn}>Sign Up</button>
          </form>
    </div>
  );
};