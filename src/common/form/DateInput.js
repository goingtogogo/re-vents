import React from "react";
import { Form, Label } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const DateInput = ({
  input: { value, onChange, ...restInput },
  placeholder,
  width,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <Form.Field width={width} error={touched && !!error}>
      <DatePicker
        {...rest}
        placeholderText={placeholder}
        selected={value ? moment(value) : null}
        onChange={onChange}
        {...restInput}
      />
      {touched &&
        error && (
          <Label basic color="red">
            {error}
          </Label>
        )}
    </Form.Field>
  );
};

export default DateInput;
