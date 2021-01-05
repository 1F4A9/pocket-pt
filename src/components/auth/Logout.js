import { useAuth0 } from '@auth0/auth0-react';

import Nav from '../common/Nav';

export default function Logout() {
  const { logout } = useAuth0();

  function onLogout() {
    logout({ returnTo: window.location.origin });
  };

  return <Nav icon="prev" cbOnClick={() => onLogout()} />
};
