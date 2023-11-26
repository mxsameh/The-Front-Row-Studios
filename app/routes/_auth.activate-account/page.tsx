import {Form, useActionData} from '@remix-run/react';
import styles from './styles.module.css';
import classNames from 'classnames';

const Activate = () => {
  const actionData = useActionData() as any;
  const error = actionData?.error;

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>WELCOME TO THE FRONT ROW</h1>
      <p className={styles.introText}>
        Create your password to activate your account
      </p>
      <Form method="POST" className={styles.form}>
        <fieldset className={styles.fieldset}>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
            aria-label="Password"
            minLength={6}
            required
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            className={styles.input}
          />
        </fieldset>
        <p className={styles.error}>&nbsp;{error}</p>
        <button
          type="submit"
          className={classNames(styles.submitBtn, 'animated-btn')}
        >
          Save
        </button>
      </Form>
    </main>
  );
};
export default Activate;
