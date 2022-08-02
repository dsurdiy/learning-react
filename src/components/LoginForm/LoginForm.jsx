import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from '@emotion/styled';
import * as yup from 'yup';

const schema = yup.object().shape({
  login: yup.string().required,
  password: yup.string().min(6).max(16).required,
});

const initialValues = {
  login: '',
  password: '',
};

const Input = styled(Field)`
  color: #2e2e2e;
`;

export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label>
          Login
          <Input type="text" name="login" />
          <ErrorMessage name="login" component="div" />
        </label>
        <label>
          Password
          <Input type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
