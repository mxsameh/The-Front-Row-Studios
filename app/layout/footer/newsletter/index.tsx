import FR_Logo from '~/icons/FR_Logo';
import styles from './styles.module.css';

const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <FR_Logo className={styles.newsletter_logo} />
      <form action="" className={styles.newsletter_form}>
        <label className={styles.newsletter_label}>
          sign up for exclusive content
        </label>
        <div className={styles.form_wrapper}>
          <input
            className={styles.newsletter_input}
            type="text"
            name="email"
            placeholder="Your email address"
          />
          <button className={styles.form_submitBtn} type="submit">
            <div className={styles.text_wrapper}>
              <span id="newsletter-submit-btn" className={styles.btn_text}>
                submit
              </span>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
