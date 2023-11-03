import React, { useState } from 'react';

const App = () => {

  let [formObj, setFormObj] =  useState({
    fName: "Mehedi",
    lName: "Hasan",
    city: "Dhaka",
    gender: "Female"
  });

  const inputOnChange = (property, value)=> {
    setFormObj(
      prevObj => ({
        ...prevObj,
          [property]: value
      }
    ))
  }


  const formSubmit = (e)=>{
    e.preventDefault();
  }

  return (
    <div class="container">
        <br/><br/>
        <form onSubmit={formSubmit}>

            <input onChange={(e)=>inputOnChange("fName", e.target.value)} value={formObj.fName} placeholder="Enter First Name"/>
            <br/>
            <input onChange={(e)=>inputOnChange("lName", e.target.value)}  value={formObj.lName} placeholder="Enter Last Name"/>
            <br/>
            <select onChange={(e)=>inputOnChange("city", e.target.value)}  value={formObj.city}>
                <option value="">Choose City</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Rangpur">Rangpur</option>
            </select>
            <br/>
            <input onChange={(e)=>inputOnChange("gender", "Male")} id="male" checked={formObj.gender==="Male"} type="radio" name="gender" value="Male"/> <label for="male">Male</label>
            <br/>
            <input onChange={(e)=>inputOnChange("gender", "Female")} id="female" checked={formObj.gender==="Female"} type="radio" name="gender" value="Female"/> 
            <label for="female"> Female</label>
            <br/><br/>
            <button onChange="" type="submit" >Submit</button>
        </form>

        <ul>
          <li>First Name: {formObj.fName}</li>
          <li>Last Name: {formObj.lName}</li>
          <li>City Name: {formObj.city}</li>
          <li>Gender: {formObj.gender}</li>
        </ul>

        <>
          {JSON.stringify(formObj)}
        </>

    </div>

  );
};

export default App;