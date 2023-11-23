import styles from './styles.module.css';
import {Link} from '@remix-run/react';
import Success_icon from '~/icons/Success_icon';

const ResetSuccess = () => {
  return (
    <div className={styles.reset_success}>
      <div className={styles.success}>
        <Success_icon className={styles.success_icon} />
        <p className={styles.success_text}>
          Password reset link was sent successfully
        </p>
      </div>

      <Link to="/login" className={styles.backToLogin}>
        Back to Login
      </Link>
    </div>
  );
};

export default ResetSuccess;
