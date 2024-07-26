import React, { useState } from "react";

const Register = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleBlur = (field) => {
    if (!formData[field]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`,
      }));
    }
  };

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log(formData);
      // Handle form submission
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <img
          src="https://via.placeholder.com/150"
          alt="College Logo"
          className="logo"
        />
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onBlur={() => handleBlur("email")}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              value={formData.username}
              onBlur={() => handleBlur("username")}
              onChange={(e) => handleChange("username", e.target.value)}
            />
            {errors.username && (
              <p className="error-message">{errors.username}</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onBlur={() => handleBlur("password")}
              onChange={(e) => handleChange("password", e.target.value)}
            />
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
          </div>
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
