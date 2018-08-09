import React, { Component } from 'react';
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Col, Button, Form, FormGroup, Label } from 'reactstrap';
import { createUser } from '../../features/users/actions';
import InputField from '../InputField/InputField';
import { required } from "../../utils/validation";

export class FormComponent extends Component {
  submit(values) {
    return this.props.createUser(values)
      .then(this.props.reset);
  }

  render() {
    const { handleSubmit, submitting, invalid, reset, pristine } = this.props;

    return (
      <Form id="userForm" onSubmit={handleSubmit((values) => this.submit(values))} style={{ marginBottom: "20px" }}>
        <FormGroup row>
          <Label sm={4}>First name</Label>
          <Col sm={8}>
            <Field 
              id="firstName"
              type="text" 
              name="first_name" 
              placeholder="Enter first name" 
              component={InputField} 
              validate={required} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={4}>Second name</Label>
          <Col sm={8}>
            <Field 
              id="lasttName"
              type="text" 
              name="last_name" 
              placeholder="Enter second name"
              component={InputField} 
              validate={required} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={4}>Date of birth</Label>
          <Col sm={8}>
            <Field 
              type="date"   
              name="dob" 
              placeholder="Enter date of birth"
              component={InputField} 
              validate={required} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={4}>Location</Label>
          <Col sm={8}>
            <Field 
              type="text" 
              name="location" 
              placeholder="Enter location" 
              component={InputField} 
              validate={required} />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 4, offset: 4 }}>
            <Button type="submit" disabled={invalid || submitting}>Submit</Button>
            <Button type="button" disabled={pristine || submitting} onClick={reset} style={{float: "right"}}>Clear</Button>            
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

FormComponent.propTypes = {};

export default connect(null, { createUser })(reduxForm({
  form: "UserForm"
})(FormComponent));