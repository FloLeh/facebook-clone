import React, { useState } from 'react'
import './MessageSender.css'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import { useStateValue } from './StateProvider'
import db from './firebase'
import firebase from 'firebase'

function MessageSender() {
  const [{ user, infos }] = useStateValue()
  const [input, setInput] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl
    })

    setInput('');
    setImageUrl('');
  }
  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar src={user.photoURL}/>
        <form>
          <input value={input} onChange={e => setInput(e.target.value)} className='messageSender__input' placeholder={`Que voulez-vous dire, ` + infos.profile.given_name + '?' }/>
          <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder='Lien vers image (Optionnel)'/>

          <button onClick={handleSubmit} type='submit'>Hidden Submit</button>
        </form>
      </div>
      <div className='messageSender__bottom'>
        <div className="messageSender__option">
          <VideocamIcon style={{ color: 'red' }}/>
          <h3>Vidéo en direct</h3>
        </div>

        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: 'green' }}/>
          <h3>Photo/Vidéo</h3>
        </div>

        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: 'orange' }}/>
          <h3>Humeur/Activité</h3>
        </div>
      </div>
    </div>
  )
}

export default MessageSender
