import styles from './styles.module.css';
import {Form, Link, useActionData, useNavigation} from '@remix-run/react';
import classNames from 'classnames';
import LoadingLine from '~/components/loading line';

const LoginPage = () => {
  const {state} = useNavigation();
  const data = useActionData() as any;
  const {error} = data || {};
  const loggingIn = state == 'submitting';

  return (
    <main className={styles.main}>
      <Form method="POST" className={styles.form}>
        <fieldset className={styles.fieldset}>
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="person@mail.com"
            autoFocus
            className={styles.input}
          />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
            className={styles.input}
          />
        </fieldset>
        <Link to="/recover-password" className={styles.forgotPass}>
          Forgot your password?
        </Link>

        <p className={styles.error}>{error}</p>
        {!loggingIn ? (
          <button
            name="_action"
            value="login"
            type="submit"
            className={classNames(styles.login_btn, styles.btn, 'animated-btn')}
          >
            Login
          </button>
        ) : (
          <div className={classNames(styles.btn, styles.loadingLine)}>
            <LoadingLine />
          </div>
        )}
        <Link to="/register" className={styles.createAcc}>
          <span>Create new account</span>
        </Link>
      </Form>
    </main>
  );
};

export default LoginPage;
