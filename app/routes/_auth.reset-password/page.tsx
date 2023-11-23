import styles from './styles.module.css';
import {useActionData} from '@remix-run/react';
import ResetForm from './components/reset form';
import ResetSuccess from './components/reset success';

const ResetPassword = () => {
  const {error, resetRequested} = useActionData() || ({} as any);
  return (
    <div className={styles.reset}>
      <h1 className={styles.reset_title}>reset password</h1>
      {resetRequested ? <ResetSuccess /> : <ResetForm />}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default ResetPassword;
