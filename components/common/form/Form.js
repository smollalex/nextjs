import { Formik, Form } from "formik";

function MyForm({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      dirty
    >
      <Form>{children}</Form>
    </Formik>
  );
}

export default MyForm;
