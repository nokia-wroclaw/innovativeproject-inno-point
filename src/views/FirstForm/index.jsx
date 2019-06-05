import React, { useEffect, useState } from "react";
import { useForm, useField } from 'react-final-form-hooks'

import { css } from "emotion";

const containerStyle = css`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: grid;
  grid-template: "header main" / var(--headerWidth) auto;
  background-color: hsl(0, 0%, 95%);

  @media (max-width: 700px) {
    grid-template: "header main" / 80px auto;
  }

  @media (max-width: 470px) {
    grid-template: "header main" / 60px auto;
  }
`;

export default () => {
    const { form, handleSubmit, values, pristine, submitting } = useForm({
      onSubmit, 
      validate 
    })
    const firstName = useField('firstName', form)
    const lastName = useField('lastName', form)
    return (
        <div className={containerStyle}></div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input {...firstName.input} placeholder="First Name" />
          {firstName.meta.touched && firstName.meta.error && (
            <span>{firstName.meta.error}</span>
          )}
        </div>
        <div>
          <label>Last Name</label>
          <input {...lastName.input} placeholder="Last Name" />
          {lastName.meta.touched && lastName.meta.error && (
            <span>{lastName.meta.error}</span>
          )}
        </div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </form>
      </div>
    )
  }