function Login() {
    return (
      <div className="login">
        <h2>Login or Register</h2>
        <form className="profile-form">

          <div className="form-group">
              <label>Email:</label>
              <input type="text" required />
          </div>
  
          <div className="form-group">
              <label>Password:</label>
              <input type="text" required />
          </div>
  
          <button>Login</button>
        </form>
      </div>
    );
  }
  
  export default Login;
  
