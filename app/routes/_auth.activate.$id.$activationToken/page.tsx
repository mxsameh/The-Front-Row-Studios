import { Form, useActionData } from "@remix-run/react";

 const  Activate =() => {
  const actionData = useActionData() as any;
  const error = actionData?.error

  return (
      <div >
        <h1>Activate Account</h1>
        <p >Create your password to activate your account.</p>
        <Form
          method="post"
          noValidate
          className="pt-6 pb-8 mt-4 mb-4 space-y-3"
        >
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              aria-label="Password"
              minLength={6}
              required
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
            />
            <button
              type="submit"
            >
              Save
            </button>
        </Form>
      </div>
  );
}
export default Activate