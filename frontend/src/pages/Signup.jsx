import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    role: 'donor',
    name: '',
    email: '',
    password: '',
    hospitalID: '',
    phone: '',
    address: '',
    hospitalName: '',
    city: '',
  });

  function changeHandler(e) {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(formData);
    formData.role==='donor'? navigate('/donor-dashboard'):navigate('/doctor-dashboard');
   
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 p-4">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Create Account
        </h2>

        {/* Role Selector */}
        <div className="flex justify-center gap-3 mb-6">
          <button
            type="button"
            name="role"
            value="donor"
            onClick={changeHandler}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
              formData.role === "donor"
                ? "bg-blue-600 text-white border-blue-600 shadow"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            Donor
          </button>

          <button
            type="button"
            name="role"
            value="doctor"
            onClick={changeHandler}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
              formData.role === "doctor"
                ? "bg-blue-600 text-white border-blue-600 shadow"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            Doctor
          </button>
        </div>

        <form onSubmit={submitHandler} className="space-y-4">

  {/* FORM GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    <div className="col-span-2">
      <label className="text-sm font-semibold text-gray-700">Name</label>
      <input
        required
        name="name"
        type="text"
        value={formData.name}
        onChange={changeHandler}
        className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="text-sm font-semibold text-gray-700">Email</label>
      <input
        required
        name="email"
        type="email"
        value={formData.email}
        onChange={changeHandler}
        className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="text-sm font-semibold text-gray-700">Password</label>
      <input
        required
        name="password"
        type="password"
        value={formData.password}
        onChange={changeHandler}
        className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="text-sm font-semibold text-gray-700">Hospital ID</label>
      <input
        required
        name="hospitalID"
        type="text"
        value={formData.hospitalID}
        onChange={changeHandler}
        className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="text-sm font-semibold text-gray-700">Phone</label>
      <input
        required
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={changeHandler}
        className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="col-span-2">
      <label className="text-sm font-semibold text-gray-700">Address</label>
      <input
        required
        name="address"
        type="text"
        value={formData.address}
        onChange={changeHandler}
        className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Doctor extra fields */}
    {formData.role === "doctor" && (
      <>
        <div>
          <label className="text-sm font-semibold text-gray-700">Hospital Name</label>
          <input
            required
            name="hospitalName"
            type="text"
            value={formData.hospitalName}
            onChange={changeHandler}
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-700">City</label>
          <input
            required
            name="city"
            type="text"
            value={formData.city}
            onChange={changeHandler}
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </>
    )}
  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-all mt-4"
  >
    Register
  </button>
</form>


        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate('/login')}
            className="text-blue-600 font-semibold cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  )
}

export default Signup
