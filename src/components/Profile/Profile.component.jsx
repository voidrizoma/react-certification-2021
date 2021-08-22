import React from 'react';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProfileWrapper } from './profile.styled';

function Profile() {
  return (
    <ProfileWrapper>
      <FontAwesomeIcon icon={faUserCircle} size="2x" />
    </ProfileWrapper>
  );
}

export default Profile;
