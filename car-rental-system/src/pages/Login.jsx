import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {

    e.preventDefault();

    localStorage.setItem(
      "driveeaseUser",
      JSON.stringify({ email })
    );

    alert("Login successful!");

    navigate("/");
  }

  return (
    <main className="auth-wrap">

      <form
        className="auth-card"
        onSubmit={handleLogin}
      >

        <span className="eyebrow">
          WELCOME 
        </span>

        <h1>Log in.</h1>

        <p className="muted">
          Pick up where your journey left off.
        </p>

        <label>
          Email

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>

        <label>
          Password

          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </label>

        <button className="btn full">
          Log in
        </button>

        <p className="muted">
          New here?{" "}
          <Link to="/signup" className="text-link">
            Create an account
          </Link>
        </p>

        <small>
          Demo-only login. Credentials are not verified.
        </small>

      </form>

    </main>
  );
}