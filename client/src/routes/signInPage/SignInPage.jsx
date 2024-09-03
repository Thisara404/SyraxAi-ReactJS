import React from 'react'
import "./signInPage.css"
import { SignIn, useAuth } from '@clerk/clerk-react'
import LoadingSpinner from '../../layouts/LoadingSpinner/LoadingSpinner'

const SignInPage = () => {

  const { isLoaded } = useAuth();

  if (!isLoaded) return <LoadingSpinner />;
  
  return (
    <div className='signInPage'>
      <SignIn path="/sign-in" signUpUrl='/sign-up' forceRedirectUrl="/dashboard"/>
    </div>
  )
}

export default SignInPage
