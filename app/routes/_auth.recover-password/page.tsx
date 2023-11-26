import styles from './styles.module.css';
import {useActionData} from '@remix-run/react';
import RecoverForm from './components/recover form';
import RecoverSuccess from './components/recover success';

const RecoverPassword = () => {
  const {error, resetRequested} = useActionData() || ({} as any);
  return (
    <main className={styles.main}>
      <h1 className={styles.reset_title}>RECOVER PASSWORD</h1>
      {resetRequested ? <RecoverSuccess /> : <RecoverForm />}
      {error && <p className={styles.error}>{error}</p>}
    </main>
  );
};

export default RecoverPassword;
