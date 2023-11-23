import styles from './styles.module.css';
import {useFetcher} from '@remix-run/react';
import classNames from 'classnames';
import {useRef, useContext, useState, useEffect} from 'react';
import PhoneInput from 'react-phone-number-input';
import validateCustomer from '../../utils/validateCustomer';
import {ICustomerContext, customerContext} from '~/context/customerContext';

const EditableProfileData = (props) => {
  const {toogleEditMode} = props;
  const {customer, updateCustomer} = useContext(
    customerContext,
  ) as ICustomerContext;
  const {firstName, lastName, email, phone} = customer!;
  const [error, setError] = useState<null | string>(null);

  const formRef: any = useRef();
  const fetcher = useFetcher();
  const data = fetcher.data as any;

  const handleCancelClick = () => {
    toogleEditMode();
  };

  const submitForm = () => {
    setError(null);
    const form = formRef.current as HTMLFormElement;
    const formData = new FormData(form);
    const isValidForm = form.checkValidity();
    if (!isValidForm) {
      setError('Please fill the rquired info');
    }
    const {error, customer} = validateCustomer(formData);

    if (error) {
      setError(error);
      return;
    }

    updateCustomer(customer);

    fetcher.submit({customer: JSON.stringify(customer)}, {method: 'PUT'});
  };

  useEffect(() => {
    if (data?.customer) toogleEditMode();
  }, [data]);

  return (
    <fetcher.Form ref={formRef} className={styles.profile_form}>
      {/* FIRST NAME */}
      <fieldset className={classNames(styles.firstName, styles.fieldset)}>
        <label htmlFor="firstName" className={styles.label}>
          first name
        </label>
        <input
          required
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Mohamed"
          defaultValue={firstName}
          className={styles.input}
        />
      </fieldset>
      {/* Last NAME */}
      <fieldset className={classNames(styles.lastName, styles.fieldset)}>
        <label htmlFor="lastName" className={styles.label}>
          last name
        </label>
        <input
          required
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Hassan"
          defaultValue={lastName}
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
            value={phone}
            onChange={() => {}}
            placeholder="Enter phone number"
          />
        </div>
      </fieldset>
      {/* EMAIL */}
      <fieldset className={classNames(styles.email, styles.fieldset)}>
        <label htmlFor="email" className={styles.label}>
          email
        </label>
        <input
          required
          id="email"
          name="email"
          type="email"
          placeholder="person@email.com"
          defaultValue={email}
          className={styles.input}
        />
      </fieldset>
      {/* PASSWORD */}
      <fieldset className={classNames(styles.password, styles.fieldset)}>
        <label htmlFor="password" className={styles.label}>
          password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="New Password"
          defaultValue={''}
          className={styles.input}
        />
      </fieldset>
      {/* ERROR */}
      <p className={styles.error}>{error} &nbsp;</p>
      {/* SAVE BUTTON */}
      <button
        type="button"
        className={classNames(styles.btn, styles.submitBtn)}
        onClick={submitForm}
      >
        Save
      </button>
      {/* CANCEL BUTTON */}
      <button
        type="button"
        className={classNames(styles.btn, styles.cancelBtn)}
        onClick={handleCancelClick}
      >
        Cancel
      </button>
    </fetcher.Form>
  );
};
export default EditableProfileData;
