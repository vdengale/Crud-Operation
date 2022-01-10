import axios from 'axios';
import React, { useState, useEffect} from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {

const [user ,setUser]= useState([])

useEffect(() => {
      getdata();
}, [])

const getdata = async() =>{ 
  await axios
  .get("http://localhost:3001/users")
  .then((res)=> setUser(res.data));
  //console.log("i m get request",userdata)
};

const deleteuser=(id)=>{
   axios.delete(`http://localhost:3001/users/${id}`)
   getdata();
}

  return (
    <div>
      <h1 className="text-center mt-5">Employee Details</h1>

      {/* <nav className="navbar navbar-light bg-light "> 
        <div className="container-fluid mt-4">
          <form className="d-flex d-grid gap-3 col-2 mx-auto">
            <input className="form-control" type="text"  onChange={(e)=>serachUser(e)}placeholder="Search" aria-label="Search" />
             <button className="btn btn-outline-success btn-lg" type="submit">Add </button> 
          </form>
        </div>
      </nav>
      <hr></hr>*/}

      <div>
        <Table className="container mt-4 pt-2 bg-light">
          <thead className="bg-success">
            <tr className='bg-danger'>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email id</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
             user.map((user) => (
                <tr>
                  <th scope="row">{user.id}</th>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.email_id}</td>
                  <td>{user.phone}</td>
                  <td><div>  
                    <Link  className="btn btn-info mx-3" to={`/editUser/${user.id}`}>Edit</Link>
                    {/* <button className='btn btn-primary mx-2'>Edit</button> */}
                    <button className='btn btn-danger'onClick = {()=>deleteuser(user.id)}> Delete</button>
                  </div></td>
                  
                </tr>
             ))
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Home

