import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const UserSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      addContact({
        username: values.username,
        number: values.number,
      })
    );
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ username: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={UserSchema}
      >
        <Form className={css.container}>
          <div className={css.containerList}>
            <p>Name</p>
            <Field
              className={css.contactFormInput}
              type="text"
              name="username"
            />
            <ErrorMessage
              className={css.error}
              name="username"
              component="span"
            />
          </div>
          <div className={css.containerList}>
            <p>Number</p>
            <Field className={css.contactFormInput} type="tel" name="number" />
            <ErrorMessage
              className={css.errorNum}
              name="number"
              component="span"
            />
          </div>
          <button className={css.btnForm} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
