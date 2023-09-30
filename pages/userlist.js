import axios from "axios";
import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState()
  const [isLoading, setLoading] = useState(false)

  const handleUser = async () => {
    setLoading(true)
    const apiUrl = "/api/private"

    axios.get(apiUrl).then((res) => {
      console.log(res)
      setUsers(res.data)
      setLoading(false)
    }).catch((err) => {
      alert(err)
      setLoading(false)
    })
  }

  useEffect(() => {
    handleUser();
  }, [])

  return (
    <div>
      <h1>User List</h1>
      {isLoading ? 'Loading ...': (
        <>  
          {users && users.map((v, k) => (
            
          <p key={k}>{v.email}</p>
        ))}
        </>
      )}
      
    </div>
  );
}