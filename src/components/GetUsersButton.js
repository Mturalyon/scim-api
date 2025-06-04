import { useEffect } from "react";
import { getUsers } from "../hooks/getUsers";

function GetUsersButton() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        console.log(data.Resources);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return <div>Check Console Log</div>
}

export default GetUsersButton;