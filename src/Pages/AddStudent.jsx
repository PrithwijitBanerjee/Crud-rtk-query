import React, { useState } from 'react'
import { useAddStudentMutation } from '../Services/api';
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
const initialState={
  name:'',
  age:'',
  gender:'',
  marks:'',
};

export const AddStudent = () => {
  const navigate=useNavigate();
  const [addStu]=useAddStudentMutation();
  const [student,setStudent]=useState(initialState);
  const [error,setError]=useState({});


  //On Submit Validation...

  const validation=()=>{
    const error={};
    if(student?.name?.length===0)
    {
      error.name='Name is Required';
    }
    if(student?.age==='')
    {
      error.age='Age is Required';
    }if(student?.gender?.length===0)
    {
      error.gender='Gender is Required';
    }if(student?.marks==='')
    {
      error.marks='Marks is Required';
    }

    return error;
  }

//On Change Validation...
  const postUserData=e=>{
      let name=e.target.name;
      setStudent({...student,[name]:e.target.value});
      if(name==='name')
      {
        if(e.target.value==='')
        {
          setError({...error,name:'@Name is Required'});
          setStudent({...student,name:''});
        }
        else{
          setError({...error,name:''});
          setStudent({...student,name:e.target.value});
        }
      }

      if(name==='age')
      {
        if(e.target.value==='')
        {
          setError({...error,age:'@Age is Required'});
          setStudent({...student,age:''});
        }
        else{
          setError({...error,age:''});
          setStudent({...student,age:e.target.value});
        }
      }


      if(name==='gender')
      {
        if(e.target.value?.length===0)
        {
          setError({...error,gender:'@Gender is Required'});
          setStudent({...student,gender:''});
        }
        else{
          setError({...error,gender:''});
          setStudent({...student,gender:e.target.value});
        }
      }

      if(name==='marks')
      {
        if(e.target.value==='')
        {
          setError({...error,marks:'@Marks is Required'});
          setStudent({...student,marks:''});
        }
        else{
          setError({...error,marks:''});
          setStudent({...student,marks:e.target.value});
        }
      }
  }

  const submitInfo=e=>{
    e.preventDefault();
    const errorList=validation();
    setError(errorList);
    if(Object.keys(errorList)?.length<1)
    {
        //Async Operation...
        addStu(student);
        toast.success('student has been added successfully...',{
          theme:'colored'
        });
        navigate('/');
    }
    else{
      toast.error('Plz fill all the feilds properly...',{
        theme:'colored'
      });
    }
  }
  return (
    <>
      <div className="card" style={{ width: '30rem', margin: '50px auto' }}>
        <div className="card-body">
          <h5 className="card-title">Add Student Form</h5>
          <p className="card-text">



            <form>
              <div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Name</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Name' autoComplete='on' name='name' onChange={postUserData} value={student?.name}/>
                  <span className='text-danger'>{error?.name}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Age</label>
                  <input type="number" className="form-control" id="exampleInputPassword1" placeholder='Your Age' autoComplete='on' name='age' onChange={postUserData} value={student?.age}/>
                  <span className='text-danger'>{error?.age}</span>

                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Marks</label>
                  <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Your Marks' autoComplete='on' name='marks' onChange={postUserData} value={student?.marks}/>
                  <span className='text-danger'>{error?.marks}</span>

                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Gender</label>
                  <div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" defaultValue="option1" value='Male' onChange={postUserData}/>
                      <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" defaultValue="option2" value='Female' onChange={postUserData}/>
                      <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                    </div>
                  </div>
                  <span className='text-danger'>{error?.gender}</span>

                </div>
              </div>
            </form>



          </p>
          <button className="btn btn-outline-primary" onClick={submitInfo}>Add</button>
        </div>
      </div>

    </>
  )
}


export default AddStudent;