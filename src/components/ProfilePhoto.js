import React from 'react'

const ProfilePhoto = ({ photoURL }) => {
  return (
    <div>
      {photoURL ? (
        <img src={photoURL} alt="Profile" className="addedprofile" />
      ) : (
        <img src="/defaultprofile.jpeg" alt="Default Profile" className="defaultprofile" />
      )}
    </div>
  )
}

export default ProfilePhoto
