import React, { useEffect, useState } from 'react';
import AdminLogin from './AdminLogin';
import Admin from './Admin';

function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const isAdminUser = localStorage.getItem('isAdmin');
    if (isAdminUser === 'true') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div>
      {isAdmin ? <Admin /> : <AdminLogin />}
    </div>
  );
}

export default AdminPage;
