import React from 'react'

import styles from './FormsControls.module.css'

const FormControl = ({ input, meta, ...props }: any) => {
  const hasError = meta.touched && meta.error

  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <div>{props.children}</div>
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  )
}

export const Textarea = (props: any) => {
  return (
    <FormControl {...props}>
      <textarea {...props.input} {...props} />{' '}
    </FormControl>
  )
}

export const Input = (props: any) => {
  return (
    <FormControl {...props}>
      <input {...props.input} {...props} />{' '}
    </FormControl>
  )
}
