import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      <div className="form-container">
        <div className="glass-card animate-fade-in delay-1">
          <h2 className="form-title">Welcome Back</h2>
          
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-input" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" className="form-input" placeholder="Enter your password" />
          </div>

          <button className="btn btn-primary animate-slide-up delay-2" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}>
            Login to DarshanEase
          </button>

          <div style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-light)' }} className="animate-fade-in delay-3">
            Don't have an account? <Link to="/register" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Sign up here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}