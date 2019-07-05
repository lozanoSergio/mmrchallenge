import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Message } from "semantic-ui-react";
import PortInput from "./form/PortInput";
import moment from 'moment';

const validateInputs = values => {
  let errors = {};

  Object.entries(values).forEach(([key, value]) => {
    if (!values[key] && key !== 'endDate') {
        errors[key] = `Field ${key} is required!`
    }
  });

  const startDate = moment(values.startDate);
  const endDate = moment(values.endDate);

  if (startDate && endDate && endDate.isBefore(startDate)) {
      errors.endDate = 'End Date cannot be before start date!';
  }

  return errors;
};

const CreateTournamentForm = ({initialValues, onSubmit, error}) => (
  <div>
    <Formik
      initialValues={initialValues}
      validate={validateInputs}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            type="text"
            name="title"
            label="Title"
            component={PortInput}
          />
          <Field
            type="text"
            name="company"
            label="Company"
            component={PortInput}
          />
          <Field
            type="text"
            name="location"
            label="Location"
            component={PortInput}
          />
          <Field
            type="text"
            name="position"
            label="Position"
            component={PortInput}
          />
          <Field
            type="textarea"
            name="description"
            label="Description"
            component={PortInput}
          />
          {error && 
            <Message negative>
              <p>{error}</p>
            </Message>
          }
          <Button color="success" size="lg" type="submit" disabled={isSubmitting}>
            Create
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default CreateTournamentForm;
