import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useNavigate, useParams} from 'react-router-dom';


function EditUser() {

    const navigate = useNavigate();

    let { id } = useParams();

   // const [errorMessage, setErrorMessage] = useState('')        //error msg show

    const [addInput, setAddInput] = useState({
        fname: "",
        lname: "",
        email_id: "",
        phone: "",
    });
    //console.log(addInput);

    useEffect(() => {
        editUser(); 
    }, []);
    

   const {fname, lname, phone, email_id } = addInput;

    const handleChange = (e) => {
        setAddInput({ ...addInput, [e.target.name]: e.target.value});
        console.log("input data==>>",addInput)
    }
  
   
    const postdata = async (e) => {
        e.preventDefault();
        // if (addInput.fname === '' || addInput.lname === '' || addInput.email_id === '') {
        //     setErrorMessage('Enter the empty field');
        // } else {
        //     setErrorMessage('');
        // }
        const userdata = await axios.put(`http://localhost:3001/users/${id}`,addInput)
        setAddInput(userdata);
        console.log("user Data for post===>>",userdata.data);
        navigate("/",{replace:true});
    }

    const editUser= async ()=>{
        const setuser= await axios.get(`http://localhost:3001/users/${id}`);    //get data form home page 
        setAddInput(setuser.data);
        console.log(setuser.data);
    };
    
    return (
        <div>
            <div className="container bg-light mt-4 py-5">
                <h3 className="text-center" style={{ color: 'blue' }}>Update Details</h3>
                {/* <p className="text-center" style={{ color: 'red' }}>{errorMessage}</p> */}
                <form onSubmit={(e)=> postdata(e)}> 
                    <div className="mb-3">
                        <label for="exampleInputName1" className="form-label">First Name</label>
                        <input type="text" className="form-control" name="fname"
                        value={fname}  required
                         onChange={(e) => handleChange(e)} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" name="lname"
                       value={lname}  required
                        onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email Id</label>
                        <input type="email" className="form-control" required id="exampleInputEmail1" name="email_id" 
                        value={email_id}  required
                       onChange={(e) => handleChange(e)}  aria-describedby="emailHelp" placeholder="Enter the email id " />
                    </div>   
                    <div className="mb-3">
                        <label className="form-label" for="exampleEmpoyeeId">Phone Number</label>
                        <input type="text" className="form-control" required id="exampleEmployeeId" name="phone" required
                        value={phone} 
                         onChange={(e) => handleChange(e)} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg">Update</button>

                </form>
            </div>

        </div>
    )
}

export default EditUser
