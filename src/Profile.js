import React from 'react';

const profileData = {
  backend: {
    name: '김길동',
    description: 'Backend Developer',
  },
  frontend: {
    name: '홍길동',
    description: 'Frontend Developer',
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>Not found user.</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
