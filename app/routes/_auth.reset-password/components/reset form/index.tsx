import styles from './styles.module.css';
import {Form} from '@remix-run/react';

const ResetForm = () => {
  return (
    <Form method="POST" className={styles.reset_form}>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        className={styles.email_input}
      />
      <button type="submit" className={styles.reset_btn}>
        reset password
      </button>
    </Form>
  );
};
export default ResetForm;
