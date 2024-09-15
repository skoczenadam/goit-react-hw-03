import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "../components/ContactForm.module.css";
import { v4 as uuidv4 } from "uuid";

const initialValues = {
  name: "",
  number: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z \d]+$/, "No digits, no specjal characters, ")
    .min(3, "Too Short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(3, "Too short")
    .max(256, "Too long")
    .required("Required"),
});

const ContactForm = ({ addContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const handleSubmit = (values, actions) => {
    addContact({
      id: uuidv4(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId}></Field>
        <ErrorMessage className={css.error} name="name" component="div" />
        <label htmlFor={numberFieldId}>Number</label>
        <Field type="text" name="number" id={numberFieldId}></Field>
        <ErrorMessage
          className={css.error}
          name="number"
          component="div"
        />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
