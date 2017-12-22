import React from 'react';

const config = {
  clientId: 'ca87cadb1bbe9921c688',
  redirectUri: 'https://api.contributor.ninja/github/authenticate',
  scope: ['read:user'],
};

const authenticateLink =
  'https://github.com/login/oauth/authorize?client_id=' +
  config.clientId +
  '&redirect_uri=' +
  config.redirectUri +
  '&scope=' +
  config.scope.map(encodeURIComponent).join(' ');

export function Login() {
  function onClick() {
    window.location.href = authenticateLink;
  }

  return (
    <div className="login" onClick={onClick}>
      <div className="login-form">
        <button className="btn-si btn-github">Sign in with GitHub</button>
      </div>
    </div>
  );
}
