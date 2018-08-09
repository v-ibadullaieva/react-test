import React from "react";
import PropTypes from "prop-types";
import { Input, FormFeedback } from "reactstrap";

const InputField = ({
  input,
  type,
  name,
  placeholder,
  meta: { touched, error }
}) => (
  <div>
    <Input
      {...input}
      type={type}
      name={name}
      placeholder={placeholder}
      invalid={!!(touched && error)}
    />
    <FormFeedback>{error}</FormFeedback>
  </div>
);

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string
  }).isRequired
}

export default InputField;
