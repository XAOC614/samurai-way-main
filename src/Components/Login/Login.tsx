import React from 'react'

import { Field, InjectedFormProps, reduxForm } from 'redux-form'

import { required } from '../../utils/validators/validators'
import { Input } from '../FormsControls/FormsControls'

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}
export const Login = () => {
  const onSubmit = (formData: FormDataType) => {
    console.log(formData)
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Login'} name={'Login'} validate={[required]} component={Input} />
      </div>
      <div>
        <Field placeholder={'Password'} name={'password'} validate={[required]} component={Input} />
      </div>
      <div>
        <Field component={'input'} name={'remember me'} type={'checkbox'} /> remember me
      </div>
      <div>
        <button> Login </button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<FormDataType>({
  form: 'login',
})(LoginForm)
