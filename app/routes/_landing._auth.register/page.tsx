import styles from './styles.module.css';
import {Form, useActionData, useNavigation} from '@remix-run/react';
import classNames from 'classnames';
import PhoneInput from 'react-phone-number-input';
import LoadingLine from '~/components/loading line';

const RegisterPage = () => {
  const data = useActionData() as any;
  const error = data?.error;
  const {state} = useNavigation();
  const loading = state == 'submitting';

  return (
    <main className={styles.main}>
      <Form method="POST" className={styles.register_form}>
        {/* FIRST NAME */}
        <fieldset className={classNames(styles.firstName, styles.fieldset)}>
          <label className={styles.label} htmlFor="firstName">
            first name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="Enter your first name"
            autoFocus
            className={styles.input}
          />
        </fieldset>
        {/* LAST NAME */}
        <fieldset className={classNames(styles.lastName, styles.fieldset)}>
          <label className={styles.label} htmlFor="lastName">
            last name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Enter your last name"
            className={styles.input}
          />
        </fieldset>
        {/* PHONE */}
        <fieldset className={classNames(styles.phone, styles.fieldset)}>
          <label htmlFor="phone" className={styles.label}>
            phone
          </label>
          <div className={styles.phone_wrapper}>
            <PhoneInput
              name="phone"
              international
              countryCallingCodeEditable={false}
              defaultCountry="EG"
              onChange={() => {}}
              placeholder="Enter phone number"
              required
            />
          </div>
        </fieldset>
        {/* EMAIL */}
        <fieldset className={classNames(styles.email, styles.fieldset)}>
          <label className={styles.label} htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="notauto"
            placeholder="person@example.com"
            className={styles.input}
          />
        </fieldset>
        {/* PASSWORD */}
        <fieldset className={classNames(styles.password, styles.fieldset)}>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter a password"
            minLength={6}
            required
            autoComplete="notauto"
            className={styles.input}
          />
        </fieldset>

        {/* ERROR */}
        <p className={styles.error}>{error}</p>

        {/* REGISTER BUTTON */}
        {!loading ? (
          <button
            type="submit"
            className={classNames(
              styles.btn,
              styles.form_submit,
              'animated-btn',
            )}
          >
            Register
          </button>
        ) : (
          <div className={classNames(styles.btn, styles.loadingLine)}>
            <LoadingLine />
          </div>
        )}
      </Form>
    </main>
  );
};

export default RegisterPage;
