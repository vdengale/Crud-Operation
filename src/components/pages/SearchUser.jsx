import axios from 'axios';
import React, { useState } from 'react'
import { Table } from 'react-bootstrap';

function SearchUser() {

    const [user, setUser] = useState([]);

    const searchdata = async (keyword) => {
        //setUser(e.target.value)
        //console.log(e.target.value)

        await axios.get("http://localhost:3001/users?q=" + keyword).
            then((res) => setUser(res.data)
            );

    }



    return (
        <div className='mt-3 text-center' >
        
            <h1>Search Information</h1>
            <div className="container mt-3 text-center">
            <form class="d-flex ">
            <input type="search" className="form-control me-2 " onChange={(e) => { searchdata(e.target.value) }} placeholder='Search' />
            {/* <button class="btn btn-outline-success" type="submit" name="search"> Search</button> */}
</form>
            <div>
                <Table className="container mt-4 pt-2 bg-light">
                    <thead className="bg-success">
                        <tr className='bg-secondary'>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email id</th>
                            <th scope="col">Phone Number</th>
                            {/* //<th scope="col">Action</th> */}
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
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
        </div>
    )
}

export default SearchUser
