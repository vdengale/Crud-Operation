import axios from 'axios';
import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';


function AddUser() {

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('')        //error msg show

    const [addInput, setAddInput] = useState({
        fname: "",
        lname: "",
        email_id: "",
        phone: ""
    })

    const handleChange = (event) => {
        setAddInput({ ...addInput, [event.target.name]: event.target.value })
        console.log(addInput)
    }

   
    const postdata = async (e) => {
        e.preventDefault();
        // if (addInput.fname === '' || addInput.lname === '' || addInput.email_id === '') {
        //     setErrorMessage('Enter the empty field');
        // } else {
        //     setErrorMessage('');
        // }
        const userdata = await axios.post(" http://localhost:3001/users", addInput)
        setAddInput(userdata);
        console.log("user Data for post===>>",userdata.data);
        navigate("/",{replace:true});
    }

    return (
        <div>
            <div className="container bg-light mt-4 py-5 login-container">
                <h3 className="text-center" style={{ color: 'blue' }}>USER DETAILS</h3>
                <p className="text-center" style={{ color: 'red' }}>{errorMessage}</p>
                <form onSubmit={(e)=> postdata(e)}> 
                    <div className="mb-3">
                        <label for="exampleInputName1" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="exampleInputName1" name="fname" onChange={handleChange} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" name="lname" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email Id</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email_id" onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter the email id " />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" for="exampleEmpoyeeId">Phone Number</label>
                        <input type="text" className="form-control" id="exampleEmployeeId" name="phone" onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg">Sign in </button>

                </form>
            </div>

        </div>
    )
}

export default AddUser
