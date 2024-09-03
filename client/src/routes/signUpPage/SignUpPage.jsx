import React from 'react'
import "./signupPage.css"
import { SignUp, useAuth } from '@clerk/clerk-react'
import LoadingSpinner from '../../layouts/LoadingSpinner/LoadingSpinner'

const SignUpPage = () => {

  const { isLoaded } = useAuth();

  if (!isLoaded) return <LoadingSpinner />;

  return (
    <div className='signUpPage'>
      <SignUp path="/sign-up" signInUrl='/sign-in' />
    </div>
  )
}

export default SignUpPage
