import React from 'react'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

import { stateType } from '../../index'
import { login } from '../../Redux/AuthReducer'
import { AppStateType } from '../../Redux/ReduxStore'
import { required } from '../../utils/validators/validators'
import { Input } from '../FormsControls/FormsControls'

type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
}
const Login = (props: any) => {
  const onSubmit = (formData: FormDataType) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
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
        <Field placeholder={'Email'} name={'email'} validate={[required]} component={Input} />
      </div>
      <div>
        <Field
          placeholder={'Password'}
          name={'password'}
          type={'password'}
          validate={[required]}
          component={Input}
        />
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
const mapStateToProps = (state: AppStateType) => {
  state.auth.isAuth
}

export default connect(mapStateToProps, { login })(Login)
