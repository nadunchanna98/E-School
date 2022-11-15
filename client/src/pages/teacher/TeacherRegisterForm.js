import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../../App.css';
import axios from "axios";
import { v4 as uuid } from 'uuid';
import moment from "moment";

function StudentRegisterForm() {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validationSchema = Yup.object().shape({


    Fname: Yup.string().required('First name is required'),
    Lname: Yup.string().required('Lname name is required'),
    Gender: Yup.string().required('Gender is required'),

    Phone_NO: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),

    Grade: Yup.string().required('Grade is required'),
    Bdate: Yup.date().required('Birth date is required'),

    Address: Yup.string().required('Address is required')
            .min(10, 'Address must be at least 10 characters')
            .max(100, 'Address must be at most 100 characters'),

    // username: Yup.string()
    //   .required('Username is required')
    //   .min(6, 'Username must be at least 6 characters')
    //   .max(20, 'Username must not exceed 20 characters'),

    email: Yup.string().required('Email is required').email('Email is invalid')
         .test('Unique Email', 'Email already in use',
         
            async (value) => {
                const response = await axios.get(`http://localhost:3001/students/registerchech/${value}`);
                return response.data.length === 0;
            }
         ),

    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),

    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),

    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
  });

  const formik = useFormik({

    initialValues: {
        Role : '',
        Fname: '',
        Lname: '',
        Gender: '',
        PhoneNO: '',
        Grade: '',
        SubjectID: '',
        email: '',
        password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
    validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,

    onSubmit: (data) => {

        const newData = {

            Role : data.Role,
            Teacher_ID: uuid(),
            Fname: data.Fname,
            Lname: data.Lname,
            Gender: data.Gender,
            PhoneNO: data.PhoneNO,
            Grade: data.Grade,
            SubjectID: "S"+ data.Grade + data.SubjectID,
            Email: data.email,
            Password: data.password,
        }


        axios.post('http://localhost:3001/teachers/register',newData).then((response) => {
            console.log("Registaton success ")
            alert("Registaton success ")
            formik.handleReset();

        }).catch((error) => {
            console.log("Registaton Error ")
        }
     );


      console.log(JSON.stringify(data, null, 2));
    },

  });

  return (
    <div className="Registration-n">

      <form onSubmit={formik.handleSubmit}>

      <div className="header-wraper-n">

      <h1 className='Topic-n' >Teacher Registration</h1>

  {/* //Role       */}
  <div className="form-group-n">
          <label htmlFor="Role">Your Role</label>
          <select name="Gender" className="form-control" onChange={formik.handleChange} value={formik.values.Role}>
                    <option value="">Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Teacher">Teacher</option>
            </select>

            <div div className="invalid-feedback">
            {formik.errors.Role && formik.touched.Role ? formik.errors.Role : null}
             </div>
        </div>




  {/* //Fname       */}
        <div className="form-group-n">
          <label htmlFor="Fname">First Name</label>
          <input
            name="Fname"
            type="text"
            placeholder="Ruvindya" 
            
            className={
              'form-control' +
              (formik.errors.Fname && formik.touched.Fname
                ? ' is-invalid'
                : '')
            }
            onChange={formik.handleChange}
            value={formik.values.Fname}
          />
          <div className="invalid-feedback">
            {formik.errors.Fname && formik.touched.Fname
              ? formik.errors.Fname
              : null}
          </div>
        </div>


 {/* //Lname       */}
        <div className="form-group">

            
          <label htmlFor="Lname">Last Name</label>
          <input
            name="Lname"
            type="text"
            placeholder="Sachi" 
            className={
              'form-control' +
              (formik.errors.Lname && formik.touched.Lname
                ? ' is-invalid'
                : '')
            }
            onChange={formik.handleChange}
            value={formik.values.Lname}
          />
          
          <div className="invalid-feedback">
            {formik.errors.Lname && formik.touched.Lname
              ? formik.errors.Lname
              : null}
          </div>
        </div>


{/* //Gender */}
        <div className="form-group">
          <label htmlFor="Gender"> Sexuality </label>
          
            <select name="Gender" className="form-control" onChange={formik.handleChange} value={formik.values.Gender}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not_respond">Prefer not to respond</option>
            </select>

            <div div className="invalid-feedback">
            {formik.errors.Gender && formik.touched.Gender ? formik.errors.Gender : null}
             </div>
        </div>


 {/* //Phone_NO */}
        <div className="form-group">
          <label htmlFor="Phone_NO"> Phone Number </label>
          <input
            name="Phone_NO"
            type="text"
            placeholder="077840112" 
            className={
              'form-control' +
              (formik.errors.Phone_NO && formik.touched.Phone_NO
                ? ' is-invalid'
                : '')
            }
            onChange={formik.handleChange}
            value={formik.values.Phone_NO}
          />
          <div className="invalid-feedback">
            {formik.errors.Phone_NO && formik.touched.Phone_NO
              ? formik.errors.Phone_NO
              : null}
          </div>
        </div>


{/* //Address */}
        <div className="form-group">
          <label htmlFor="Address"> Home Address </label>
          <input
            name="Address"
            type="text"
            placeholder="234/2 , Nuwaraeliya , Srilanka" 
            className={
              'form-control' +
              (formik.errors.Address && formik.touched.Address
                ? ' is-invalid'
                : '')
            }
            onChange={formik.handleChange}
            value={formik.values.Address}
          />
          <div className="invalid-feedback">
            {formik.errors.Address && formik.touched.Address? formik.errors.Address : null}
          </div>
        </div>

 {/* //Grade */}
        <div className="form-group">
          <label htmlFor="Grade"> Grade </label>
          
            <select  name="Grade" placeholder='Select Grade' className="form-control" onChange={formik.handleChange} value={formik.values.Grade}>
                <option value="">Select Grade</option>
                <option value="1">Grade 1</option>
                <option value="2">Grade 2</option>
                <option value="3">Grade 3</option>
                <option value="4">Grade 4</option>
                <option value="5">Grade 5</option>
            </select>

            <div div className="invalid-feedback">
            {formik.errors.Grade && formik.touched.Grade ? formik.errors.Grade : null}
             </div>   
        </div>

{/* //Bdate */}
        <div className="form-group">
          <label htmlFor="Bdate"> Birth Day </label>
          <input
            
            name="Bdate"
            type="date"
            className={
              'form-control' +
              (formik.errors.Bdate && formik.touched.Bdate
                ? ' is-invalid'
                : '')
            }
            onChange={formik.handleChange}
            value={formik.values.Bdate}
          />
          <div className="invalid-feedback">
            {formik.errors.Bdate && formik.touched.Bdate
              ? formik.errors.Bdate
              : null}
          </div>
        </div>



   {/* //email      */}
        <div className="form-group">
          <label htmlFor="email"> Email </label>
          <input
            name="email"
            type="email"
            placeholder="ruvisachi@gmail.com"
            className={
              'form-control' +
              (formik.errors.email && formik.touched.email ? ' is-invalid' : '')
            }
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <div className="invalid-feedback">
            {formik.errors.email && formik.touched.email
              ? formik.errors.email
              : null}
          </div>
        </div>



{/* //Password  */}
        <div className="form-group">
          <label htmlFor="password"> Password </label>
          <input
            name="password"
            placeholder="********"
            type="password"
            className={
              'form-control' +
              (formik.errors.password && formik.touched.password
                ? ' is-invalid'
                : '')
            }
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <div className="invalid-feedback">
            {formik.errors.password && formik.touched.password
              ? formik.errors.password
              : null}
          </div>
        </div>


{/* //Confirm Password */}
        <div className="form-group">
          <label htmlFor="confirmPassword"> Confirm Password </label>
          <input
            name="confirmPassword"
            placeholder="********"
            type="password"
            className={
              'form-control' +
              (formik.errors.confirmPassword && formik.touched.confirmPassword
                ? ' is-invalid'
                : '')
            }
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          <div className="invalid-feedback">
            {formik.errors.confirmPassword && formik.touched.confirmPassword
              ? formik.errors.confirmPassword
              : null}
          </div>
        </div>


{/* agree terms*/ }


        <div className="checkbox-wrapper">

        <label htmlFor="acceptTerms" className="form-check-label">
            I have read and agree to the Terms in E-School
          </label>
         
          <input 
            name="acceptTerms"
            type="checkbox"
            className={
              'form-check-input' +
              (formik.errors.acceptTerms && formik.touched.acceptTerms
                ? ' is-invalid'
                : '')
            }
            onChange={formik.handleChange}
            value={formik.values.acceptTerms}
          />
          
          <div className="invalid-feedback">
            {formik.errors.acceptTerms && formik.touched.acceptTerms
              ? formik.errors.acceptTerms
              : null}
          </div>
        </div>

       
        <div className="form-group">

          <button type="submit" className="btn btn-primary">
            Register
          </button>

          <button
            type="button"
            className="btn btn-warning float-right"
            onClick={formik.handleReset}
          >
            Reset
          </button>

        </div>

        </div>

      </form>
    </div>
  );
}

export default StudentRegisterForm;

