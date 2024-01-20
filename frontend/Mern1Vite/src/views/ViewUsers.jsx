import { UserContext } from "../context/UserContext"
import { useContext, useEffect } from "react"
import { useUserContext } from "../hooks/useUserContext"
import { NavLink } from "react-router-dom";
import TButton from "../components/TButton";


const ViewUsers = () => {

  const { users, dispatch} = useUserContext();
  

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:4000/api/users');
      if (response.ok) {
        const json = await response.json();
        dispatch({ type: 'GET_USERS', payload: json });
      } else {
        console.error('Failed to fetch users:', response.statusText);
      }
    }
    
    fetchUsers();
  }, [dispatch]);

  // const users = [
  //   {
  //     id: 1,
  //     name: 'John Doe',
  //     email: 'john.doe@example.com',
  //     username: 'johndoe',
  //   },
  //   {
  //     id: 2,
  //     name: 'Jane Doe',
  //     email: 'jane.doe@example.com',
  //     username: 'janedoe',
  //   },
  //   {
  //     id: 3,
  //     name: 'Bob Smith',
  //     email: 'bob.smith@example.com',
  //     username: 'bobsmith',
  //   },
  //   {
  //     id: 4,
  //     name: 'Alice Johnson',
  //     email: 'alice.johnson@example.com',
  //     username: 'alicejohnson',
  //   },
  //   {
  //     id: 5,
  //     name: 'Charlie Brown',
  //     email: 'charlie.brown@example.com',
  //     username: 'charliebrown',
  //   },
  //   {
  //     id: 6,
  //     name: 'David Williams',
  //     email: 'david.williams@example.com',
  //     username: 'davidwilliams',
  //   },
  // ];

  return (
    <div className="w-full h-screen bg-slate-100 flex justify-center ">
      <div>
      <table className=" w-[800px] bg-white text-center mt-14 rounded-sm">
        <tbody>
        <tr className="h-10 border-2">
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
        {users ? users.map((user)=>(
        <tr key={user._id} className="border-2  h-8 ">
          <td className="">{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td><NavLink to={`/users/${user._id}`} className="hover:underline">Edit</NavLink></td>
        </tr>
        )) : <tr><td>No hay usuarios</td></tr>}
        </tbody>
      </table>
     
      </div>
      <div className="absolute end-0 bottom-0 p-16"><TButton to="/users/create">Create User</TButton></div>
    </div>
  )
}
export default ViewUsers