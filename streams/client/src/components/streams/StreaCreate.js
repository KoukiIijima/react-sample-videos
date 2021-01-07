import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
  renderError({error, touched}){
    if(touched && error){
      return(
        <div>
          <div>{error}</div>
        </div>
      )
    }
  }
  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        {/* <input
          onChange={formProps.input.onChange}
          value={formProps.input.value}
        /> */}
        {/* 同じ意味 */}
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit(event) {
    //event.preventDefault()
    console.log(event)
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field
          name='description'
          component={this.renderInput}
          label='Enter Description'
        />
        <button>Submit</button>
      </form>
    )
  }
}

const validate = formValues => {
  const errors = {}
  if (!formValues.title) {
    errors.title = 'You must enter a title'
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description'
  }

  return errors;
}

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate)
