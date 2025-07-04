
import { getUsers } from "../hooks/getUsers";
import { useState } from "react";

function GetUsersButton() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [emailActive, setEmailActive] = useState("No Email");

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getUsers();
      console.log(data)

      if (data.emails[0].value) {
        setEmailActive(data.emails[0].value);
      } else {
        setEmailActive("No Email");
      }

      setUser(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div>
      <button onClick={handleClick} disabled={loading}>
        {loading ? 'Loading...' : 'Get User'}
      </button>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {user && (
        <div>
          <div>Name: {user.name.formatted}</div>
          <p>ID: {user.id}</p>
          <p>EMAIL: {emailActive}</p>
        </div>
      )}
    </div>
  );
}

export default GetUsersButton;