import React from "react";
import { Formik } from "formik";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Segment,
  Message,
  Divider
} from "semantic-ui-react";

import ImageDropzone from "../forms/form/ImageDropzone";

const CreateTournamentForm = ({
  initialValues,
  onSubmit,
  value,
  handleChange,
  error
}) => (
  <Segment>
    <Form>
      <Form.Group>
        <Form.Field
          control={Input}
          label="Tournament name"
          placeholder="Tournament name"
          width={6}
        />
      </Form.Group>
      <Form.Group inline>
        <label>Game</label>
        <Form.Field
          control={Radio}
          label="League of Legends"
          value="1"
          checked={value === "1"}
          onChange={handleChange}
        />
        <Form.Field
          control={Radio}
          label="TeamFight Tactics"
          value="2"
          checked={value === "2"}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Field control={ImageDropzone} label="Image" />
      <Form.Field
        control={TextArea}
        label="Description"
        placeholder="Tournament description ..."
      />
      <Divider />
      <Button>
        Cancel
      </Button>
      <Button floated="right" type="submit" disabled={false}>
        Next
      </Button>
    </Form>
  </Segment>
);

export default CreateTournamentForm;
