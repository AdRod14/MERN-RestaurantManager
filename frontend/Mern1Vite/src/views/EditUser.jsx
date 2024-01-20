import { useEffect, useState } from "react";
import TButton from "../components/TButton"
import {  useNavigate, useParams } from "react-router-dom";
import { IoIosArrowDropleft } from "react-icons/io";
import { FaEyeSlash,FaEye,FaRegTrashAlt } from "react-icons/fa";
import { useUserContext } from "../hooks/useUserContext";

const EditUser = () => {  
  const {id} = useParams();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    username: '', 
    password: '',
  })

  const onDelete = async () => {
    if(!window.confirm('Estas seguro de eliminar este usuario?')) return;
    const response = await fetch(`http://localhost:4000/api/users/${id}`,{
      method: 'DELETE',
    });
    if(!response.ok){
      const error = await response.text();
      alert('Error deleting user:' + error);
    } else {
      alert('User deleted successfully');
      navigate('/users')
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();

   if(id){
    const response = await fetch(`http://localhost:4000/api/users/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      alert('Error updating user: ' + errorMessage);
    } else {
      alert('User updated successfully');
      navigate('/users')
    }
   } else {
    const response = await fetch('http://localhost:4000/api/users',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      alert('Error creating user: ' + errorMessage);
    } else {
      alert('User created successfully');
      navigate('/users')
    }
   }
  }



  useEffect(()=>{
    if(id){
      const fetchUser = async () => {
        const response = await fetch(`http://localhost:4000/api/users/${id}`);
        if (response.ok) {
          const json = await response.json();
          setUser(json);
        } else {
          console.error('Failed to fetch the user', response.statusText);
        }
      }
      fetchUser();
    }
  },[])

  return (
    <>
      <div className="flex px-6 pt-3 ">
        <TButton to="/users"> <IoIosArrowDropleft className="h-4 w-4 mr-1"/> Back</TButton>
      </div>
      {/* User registry form */}
      <div className="flex  justify-center font-poppins">
        <form action="#" method="POST" onSubmit={onSubmit} className=" bg-gray-400 items-center w-[800px] rounded-md shadow-md">
          <div className="relative flex justify-center">
          <h1 className=" text-center text-lg py-2 ">User Details</h1>
          <FaRegTrashAlt onClick={onDelete} className="hover:text-indigo-500 hover:cursor-pointer absolute end-0 w-4 h-4 m-2" />
          </div>
        <div className="py-2 flex flex-col px-4">
          <label htmlFor="name" className="justify-between text-base">Nombre</label>
          <input placeholder="Nombre" className="pl-3 rounded-md h-9 border-2 hover:border-slate-400" type="text" name="name" id="name" value={user.name || ''} onChange={(e)=>{setUser({...user, name: e.target.value})}} />
        </div>
        <div className="py-2 flex flex-col px-4">
          <label htmlFor="username" className="justify-between text-base">Usuario</label>
          <input placeholder="Usuario" className="pl-3 rounded-md h-9 border-2 hover:border-slate-400" type="text" name="username" id="username" value={user.username || ''} onChange={(e)=>{setUser({...user, username: e.target.value})}} />
        </div >
        <div className="py-2 flex flex-col px-4">
          <label htmlFor="email" className="justify-between text-base">Correo</label>
          <input placeholder="Correo" className="pl-3 rounded-md h-9 border-2 hover:border-slate-400" type="text" name="email" id="email" value={user.email || ''} onChange={(e)=>{setUser({...user, email: e.target.value})}} />
        </div>
        {!id &&
         <div className="py-2 flex flex-col px-4 relative">
          <label htmlFor="password" className="justify-between text-base">Contraseña</label>
          <input placeholder="Contraseña" className=" pl-3 rounded-md h-9 border-2 hover:border-slate-400" type={showPassword?'text':'password'} name="password" id="password" value={user.password || ''} onChange={(e)=>{setUser({...user, password: e.target.value})}} />
          
          <div className="absolute end-8 bottom-4 hover:cursor-pointer">
                {
                  showPassword ? <FaEye onClick={()=>setShowPassword(false)} />:<FaEyeSlash onClick={()=>setShowPassword(true)} />  
                }
          </div>
        </div>
          }
        
        <div className="flex flex-row items-end px-3 py-2 justify-between">
          <div className="text-sm hover:cursor-pointer hover:text-indigo-500">Cambiar Contraseña</div>
          <TButton className="">Save</TButton>
        </div>
        </form>
      </div>
     
      
    </>
  )
}
export default EditUser