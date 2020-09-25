import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
  const [state, dispatch] = useStateValue()

  const signIn = () => {
    auth.signInWithPopup(provider).then(result => {
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
        infos: result.additionalUserInfo
      })
      console.log(result)
    }).catch(error => alert(error.message))
  }
  
  return (
    <div className='login'>
      <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png" alt=""/>
        <img src="https://s1.qwant.com/thumbr/0x380/9/f/f986c8d6a2107988c45fe75b5f5d57dcf94a4621a740a5c3306fa1d3c94680/facebook-logo-preview.png?u=https%3A%2F%2Fwww.seeklogo.net%2Fwp-content%2Fuploads%2F2016%2F09%2Ffacebook-logo-preview.png&q=0&b=1&p=0&a=1" alt=""/>
      </div>
      <Button type='submit' onClick={signIn}>
        Sign In
      </Button>
    </div>
  )
}

export default Login
