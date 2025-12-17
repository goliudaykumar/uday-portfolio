export default function Contact() {
  return (
    <section className="page">
      {/* Section Header */}
      <h2 className="section-title">Let’s Work Together</h2>
      <p className="section-subtitle">
        Open to full-time roles, freelance projects, and collaboration opportunities
      </p>

      {/* Intro */}
      <p className="lead">
        If you’re looking for a developer who can design clean user interfaces,
        build scalable applications, and deliver production-ready solutions,
        feel free to reach out.
      </p>

      {/* Contact Cards */}
      <div className="contact-grid">
        <div className="contact-card">
          <h3>📧 Email</h3>
          <a href="mailto:goliudaykumar01@gmail.com">
            goliudaykumar01@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <h3>📞 Phone</h3>
          <a href="tel:+919010687759">
            +91 9010688759
          </a>
        </div>

        <div className="contact-card">
          <h3>📍 Location</h3>
          <p>Hyderabad, India</p>
        </div>
      </div>
    </section>
  );
}
