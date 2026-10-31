import "./About.css";

function About() {
  return (
    <main className="about-page">

      <section className="about-heading">
        <h1>About Us</h1>
        <p>Learn more about our Employee Management System</p>
      </section>

      <section className="container about-content">
        <div className="row align-items-center g-4">

          <div className="col-md-6">
            <h2>Welcome to Our Platform</h2>

            <p>
              Our Employee Management System is designed
              to make workplace management easier and
              more efficient.
            </p>

            <p>
              It helps administrators, HR managers and
              employees manage their activities through
              a single platform.
            </p>
          </div>

          <div className="col-md-6">
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>
                To simplify employee management and
                improve workplace communication.
              </p>
            </div>

            <div className="about-card">
              <h3>Our Vision</h3>
              <p>
                To create an organized and efficient
                working environment for everyone.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="container about-features">
        <h2>What Our System Offers</h2>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="about-feature">
              <h4>Employee Management</h4>
              <p>Manage employee details easily.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="about-feature">
              <h4>HR Management</h4>
              <p>Organize employee-related activities.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="about-feature">
              <h4>Admin Management</h4>
              <p>Manage and monitor the system.</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

export default About;
