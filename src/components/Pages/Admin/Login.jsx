import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (email === "admin@gmail.com" && password === "1234") {
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid");
    }
  };

  return (
    <div class="row">
      <div class="col-md-8 login-background">
        <img
          src="/images/login-background.jpg"
          alt=""
          style={{ backgroundSize: "cover" }}
        />
      </div>
      <div class="col-md-4 login-page my-auto ps-5 pe-5">
        <Link to="#" class="login-brand"></Link>
        <h3 style={{ fontWeight: "bold" }}>Welcome, Admin BCR</h3>
        <form
          action="/login"
          method="post"
          id="add-form"
          enctype="multipart/form-data"
        >
          <div class="mb-3">
            <label for="email" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              placeholder="Enter email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div class="d-grid">
            <button
              onClick={handleLogin}
              type="submit"
              class="btn btn-primary"
              style={{ backgroundColor: "#0D28A6", borderRadius: "0" }}
              id="login-form-submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
