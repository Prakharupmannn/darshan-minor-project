import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {

  const [temples, setTemples] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/temples")
      .then(res => setTemples(res.data));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section animate-fade-in">
        <div className="hero-bg-accent"></div>
        <div className="container">
          <h1 className="hero-title animate-slide-up delay-1">
            Experience Spiritual Peace with <span style={{ color: 'var(--primary-color)' }}>DarshanEase</span>
          </h1>
          <p className="hero-subtitle animate-slide-up delay-2">
            Book your darshan and aarti slots hassle-free at the most serene temples around you. Avoid the queues and focus purely on your devotion.
          </p>
          <div className="animate-slide-up delay-3" style={{ marginBottom: '3rem' }}>
            <a href="/book" className="btn btn-primary" style={{ marginRight: '1rem', padding: '1rem 2rem', fontSize: '1.1rem' }}>Book Darshan Now</a>
            <a href="#temples" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Explore Temples</a>
          </div>

          {/* Stats Section */}
          <div className="stats-container animate-slide-up delay-4">
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Devotees Served</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Serene Temples</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Secure Booking</span>
            </div>
          </div>
        </div>
      </section>      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why Choose DarshanEase?</h2>
            <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>We make your spiritual journey seamless, peaceful, and entirely focused on your devotion.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⏱️</div>
              <h3 className="feature-title">Skip the Queues</h3>
              <p className="feature-desc">Book your slot in advance and avoid long waiting hours. Walk straight in for your serene darshan.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Secure Booking</h3>
              <p className="feature-desc">Our platform provides 100% secure payments and verifiable booking receipts directly from temple authorities.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🕊️</div>
              <h3 className="feature-title">Verified Pandits</h3>
              <p className="feature-desc">Connect with knowledgeable and verified pandits for personalized pujas and authentic spiritual rituals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Temples List Section */}
      <section id="temples" className="container" style={{ padding: '5rem 2rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }} className="animate-slide-up">Sacred Destinations</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: '3rem' }} className="animate-slide-up delay-1">
          Discover ancient and beautiful temples offering divine blessings.
        </p>

        {temples.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-light)' }}>
            Loading temples... (Ensure backend is running)
          </div>
        ) : (
          <div className="temples-grid animate-fade-in delay-2">
            {temples.map((temple, index) => (
              <div key={temple._id || index} className="temple-card">
                <div className="temple-image-placeholder">
                  {/* Fallback image icon */}
                  <span>🏛️</span>
                </div>
                <div className="temple-content">
                  <h3 className="temple-title">{temple.name}</h3>
                  <div className="temple-location">
                    <span style={{ fontSize: '1.2rem' }}>📍</span> {temple.location}
                  </div>
                  <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                    <a href={`/book?temple=${temple._id}`} className="btn btn-primary" style={{ width: '100%' }}>Book Slot</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>Devotee Experiences</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-light)' }}>Read what our community says about their spiritual journey with DarshanEase.</p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"Booking my visit to Kedar Temple was effortless. I avoided the 4-hour queue and had a very peaceful darshan."</p>
              <div className="testimonial-author">
                <div className="author-avatar">A</div>
                <span>Amit Sharma</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"A truly divine experience! The platform is very easy to use and the customer support is extremely helpful."</p>
              <div className="testimonial-author">
                <div className="author-avatar">P</div>
                <span>Priya Patel</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★☆</div>
              <p className="testimonial-text">"Great initiative. I booked a special aarti for my parents on their anniversary. Everything was well organized."</p>
              <div className="testimonial-author">
                <div className="author-avatar">R</div>
                <span>Rahul Verma</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="container">
        <div className="cta-banner">
          <h2>Ready for Your Spiritual Journey?</h2>
          <p>Join thousands of devotees who have experienced peace and devotion without the hassle.</p>
          <a href="/register" className="btn btn-secondary">Create an Account</a>
        </div>
      </section>
    </div>
  );
};

export default Home;