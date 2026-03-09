import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      <div className="form-container">
        <div className="glass-card animate-fade-in delay-1">
          <h2 className="form-title">Join DarshanEase</h2>
          
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-input" placeholder="Your full name" />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-input" placeholder="Your email address" />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" className="form-input" placeholder="Create a strong password" />
          </div>

          <button className="btn btn-primary animate-slide-up delay-2" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}>
            Create Account
          </button>

          <div style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-light)' }} className="animate-fade-in delay-3">
            Already have an account? <Link to="/login" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Login here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}