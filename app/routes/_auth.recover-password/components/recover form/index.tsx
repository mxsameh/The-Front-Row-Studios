import styles from './styles.module.css';
import {Form} from '@remix-run/react';

const RecoverForm = () => {
  return (
    <Form method="POST" className={styles.recover_form}>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        className={styles.email_input}
      />
      <button type="submit" className={styles.submitBtn}>
        reset password
      </button>
    </Form>
  );
};
export default RecoverForm;
