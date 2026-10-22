import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Web Development",
    text: "Modern, scalable and high-performance websites built for businesses and brands.",
    icon: "↗",
  },
  {
    number: "02",
    title: "Mobile App Development",
    text: "Powerful mobile applications designed for smooth experiences and real-world use.",
    icon: "◉",
  },
  {
    number: "03",
    title: "AI & Machine Learning",
    text: "Intelligent solutions that turn data into automation, predictions and business value.",
    icon: "✦",
  },
  {
    number: "04",
    title: "Custom Software",
    text: "Tailor-made software solutions designed around your exact business requirements.",
    icon: "⌘",
  },
  {
    number: "05",
    title: "Full-Stack Development",
    text: "Complete frontend and backend solutions with secure and scalable architecture.",
    icon: "◇",
  },
  {
    number: "06",
    title: "UI/UX Design",
    text: "Clean, intuitive and user-focused digital experiences with strong visual identity.",
    icon: "◌",
  },
  {
    number: "07",
    title: "E-Commerce Development",
    text: "High-converting online stores with powerful features and seamless user journeys.",
    icon: "□",
  },
  {
    number: "08",
    title: "Digital Transformation",
    text: "Helping businesses adopt modern technology and improve digital workflows.",
    icon: "⌁",
  },
  {
    number: "09",
    title: "IT Consulting & Support",
    text: "Technical guidance, architecture planning and continuous technology support.",
    icon: "＋",
  },
];

const projects = [
  {
    number: "01",
    title: "Client Website & Software Development",
    text: "Professional websites and custom software solutions developed for business clients.",
  },
  {
    number: "02",
    title: "Suguna Multispeciality Clinic",
    text: "A professional healthcare website designed to improve patient access and digital presence.",
  },
  {
    number: "03",
    title: "Movie Streaming Application",
    text: "A modern streaming platform concept with an engaging entertainment-focused interface.",
  },
  {
    number: "04",
    title: "Agromitra AI",
    text: "An AI-powered agriculture solution designed to support farmers with smarter decisions.",
  },
  {
    number: "05",
    title: "Skill Bridge",
    text: "A platform connecting academia and industry through skill mapping, internships and placements.",
  },
  {
    number: "06",
    title: "Smart E-Commerce Platform",
    text: "A complete digital commerce concept focused on intelligent shopping experiences.",
  },
  {
    number: "07",
    title: "Intelligent AGV Simulation",
    text: "An intelligent automated guided vehicle simulation focused on smart industrial movement.",
  },
];

const team = [
  {
    number: "01",
    name: "Goutham R",
    role: "Founder, CEO & Managing Director",
    initial: "G",
  },
  {
    number: "02",
    name: "Hariharan S",
    role: "General Manager",
    initial: "H",
  },
  {
    number: "03",
    name: "Viswa S",
    role: "Project Manager",
    initial: "V",
  },
  {
    number: "04",
    name: "Kubendran M",
    role: "Technical Team Lead",
    initial: "K",
  },
  {
    number: "05",
    name: "Deepak K",
    role: "Business Development & Client Relations Executive",
    initial: "D",
  },
];

export default function Home() {
  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">
            <Image
              src="/codevara-logo.png"
              alt="Codevara"
              width={42}
              height={42}
              className="logo-image"
              priority
            />

            <span>CODEVARA</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-button">
            Let's Talk ↗
          </a>
        </div>
      </nav>

      <main>
        {/* ================= TOP BANNER ================= */}

        <section id="home" className="top-banner">
          <img
            src="/codevara-banner.png"
            alt="Codevara Hi-Tech Private Limited"
            className="top-banner-image"
          />

          <div className="top-banner-overlay" />

          <div className="top-banner-content">
            <div className="top-banner-badge">
              CODEVARA HI-TECH PRIVATE LIMITED
            </div>

            <p className="top-banner-small">
              SOFTWARE • AI • DIGITAL SOLUTIONS
            </p>

            <div className="top-banner-line" />
          </div>

          <div className="top-banner-scroll">
            <span />
            SCROLL TO EXPLORE
          </div>
        </section>

        {/* ================= ABOUT ================= */}

        <section id="about" className="section about-section">
          <div className="section-label">01 / ABOUT CODEVARA</div>

          <div className="about-hero-grid">
            {/* LEFT SIDE */}

            <div className="about-heading">
              <span className="about-eyebrow">
                WHO WE ARE
              </span>

              <h2>
                Technology
                <br />
                with <span>purpose.</span>
              </h2>

              <p className="about-intro">
                We build digital solutions that connect
                technology, creativity and real-world impact.
              </p>
            </div>

            {/* RIGHT SIDE */}

            <div className="about-description">
              <p>
                <strong>
                  Codevara Hi-Tech Private Limited
                </strong>{" "}
                is a technology-driven company focused on
                creating modern digital products, intelligent
                software solutions and scalable technology
                experiences.
              </p>

              <p>
                From websites and mobile applications to
                AI-powered solutions and custom software, we
                transform ideas into meaningful products
                designed for the future.
              </p>

              <div className="about-tagline">
                <span>CODE.</span>
                <span>CREATE.</span>
                <span>EVOLVE.</span>
              </div>
            </div>
          </div>

          {/* DIVIDER */}

          <div className="about-divider" />

          {/* ABOUT FEATURES */}

          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-number">01</span>

              <div>
                <h3>Innovation</h3>

                <p>
                  Turning ideas into modern digital
                  experiences through technology and
                  creativity.
                </p>
              </div>
            </div>

            <div className="about-stat">
              <span className="about-stat-number">02</span>

              <div>
                <h3>Technology</h3>

                <p>
                  Building reliable and scalable solutions
                  using modern technologies and development
                  practices.
                </p>
              </div>
            </div>

            <div className="about-stat">
              <span className="about-stat-number">03</span>

              <div>
                <h3>Impact</h3>

                <p>
                  Creating solutions that solve real
                  problems and deliver meaningful value to
                  businesses.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM METADATA */}

          <div className="about-bottom">
            <span>CODEVARA / 2026</span>

            <span>
              SOFTWARE • AI • DIGITAL SOLUTIONS
            </span>
          </div>
        </section>

        {/* ================= SERVICES ================= */}

        {/* ================= SERVICES ================= */}

<section id="services" className="section services-section">
  <div className="section-heading services-heading">
    <div>
      <div className="section-label">02 / SERVICES</div>

      <h2>
        What we
        <br />
        <span>build.</span>
      </h2>
    </div>

    <p>
      From digital experiences to intelligent systems,
      Codevara provides end-to-end technology solutions for
      modern businesses.
    </p>
  </div>

  <div className="services-grid">
    {services.map((service, index) => (
      <div
        className="service-card"
        key={service.number}
        style={{
          animationDelay: `${index * 100}ms`,
        }}
      >
        <span className="service-number">
          {service.number}
        </span>

        <span className="service-icon">
          {service.icon}
        </span>

        <div className="service-card-content">
          <h3>{service.title}</h3>

          <p>{service.text}</p>
        </div>

        <div className="service-bottom">
          <span>CODEVARA / SERVICE</span>

          <span className="service-arrow">↗</span>
        </div>

        <div className="card-line" />
      </div>
    ))}
  </div>
</section>

        {/* ================= PROJECTS ================= */}

<section id="projects" className="section projects-section">
  <div className="section-heading projects-heading">
    <div>
      <div className="section-label">03 / PROJECTS</div>

      <h2>
        Ideas into
        <br />
        <span>reality.</span>
      </h2>
    </div>

    <p>
      A growing portfolio of digital products, platforms and
      technology concepts developed by the Codevara team.
    </p>
  </div>

  <div className="projects-grid">
    {projects.map((project, index) => (
      <article
        className="project-card"
        key={project.number}
        style={{
          animationDelay: `${index * 120}ms`,
        }}
      >
        {/* TOP META */}

        <div className="project-top">
          <span>PROJECT / {project.number}</span>
          <span>CODEVARA ↗</span>
        </div>

        {/* LARGE NUMBER */}

        <div className="project-number">
          {project.number}
        </div>

        {/* CONTENT */}

        <div className="project-content">
          <span className="project-category">
            DIGITAL SOLUTION
          </span>

          <h3>{project.title}</h3>

          <p>{project.text}</p>

          <div className="project-footer">
            <span className="project-link">
              EXPLORE PROJECT
            </span>

            <span className="project-arrow">↗</span>
          </div>
        </div>

        {/* HOVER LIGHT */}

        <div className="project-light" />

        {/* BOTTOM LINE */}

        <div className="project-card-line" />
      </article>
    ))}
  </div>
</section>

        {/* ================= WHY CODEVARA ================= */}

<section className="section why-section premium-why-section">
  <div className="why-grid">
    {/* LEFT SIDE */}

    <div className="why-intro">
      <div className="section-label">
        04 / WHY CODEVARA
      </div>

      <span className="why-eyebrow">
        OUR APPROACH
      </span>

      <h2>
        Built for
        <br />
        what&apos;s <span>next.</span>
      </h2>

      <p className="why-intro-text">
        We combine technology, creativity and business
        understanding to build digital solutions that are
        ready for today and designed for tomorrow.
      </p>

      <div className="why-orbit">
        <span className="why-orbit-dot" />
        <span className="why-orbit-ring" />
        <span className="why-orbit-ring second" />
        <span className="why-orbit-center">
          CV
        </span>
      </div>
    </div>

    {/* RIGHT SIDE */}

    <div className="why-points">
      <div className="why-point">
        <span className="why-point-number">01</span>

        <div className="why-point-content">
          <div className="why-point-top">
            <span>01 / TECHNOLOGY</span>
            <span className="why-point-arrow">↗</span>
          </div>

          <h3>Modern Technology</h3>

          <p>
            We use modern development practices and
            technologies to build reliable digital
            solutions.
          </p>
        </div>

        <div className="why-point-glow" />
      </div>

      <div className="why-point">
        <span className="why-point-number">02</span>

        <div className="why-point-content">
          <div className="why-point-top">
            <span>02 / THINKING</span>
            <span className="why-point-arrow">↗</span>
          </div>

          <h3>Creative Thinking</h3>

          <p>
            We combine technology and creativity to create
            products that are useful, simple and impactful.
          </p>
        </div>

        <div className="why-point-glow" />
      </div>

      <div className="why-point">
        <span className="why-point-number">03</span>

        <div className="why-point-content">
          <div className="why-point-top">
            <span>03 / SCALE</span>
            <span className="why-point-arrow">↗</span>
          </div>

          <h3>Scalable Solutions</h3>

          <p>
            Our solutions are designed to grow with
            businesses, projects and changing technology
            requirements.
          </p>
        </div>

        <div className="why-point-glow" />
      </div>

      <div className="why-point">
        <span className="why-point-number">04</span>

        <div className="why-point-content">
          <div className="why-point-top">
            <span>04 / PARTNERSHIP</span>
            <span className="why-point-arrow">↗</span>
          </div>

          <h3>Client Focused</h3>

          <p>
            We work closely with clients to understand
            their goals and deliver solutions that create
            real value.
          </p>
        </div>

        <div className="why-point-glow" />
      </div>
    </div>
  </div>
</section>

        {/* ================= TEAM ================= */}

<section id="team" className="section leadership-section">
  <div className="section-heading leadership-heading">
    <div>
      <div className="section-label">
        05 / LEADERSHIP
      </div>

      <h2>
        The people
        <br />
        behind <span>Codevara.</span>
      </h2>
    </div>

    <p>
      A focused team combining leadership, technology,
      project management and business development.
    </p>
  </div>

  <div className="team-grid">
    {team.map((member, index) => (
      <div
        className="team-card"
        key={member.number}
        style={{
          animationDelay: `${index * 120}ms`,
        }}
      >
        {/* TOP */}

        <div className="team-card-top">
          <span className="member-number">
            {member.number}
          </span>

          <span className="team-card-mark">
            CODEVARA ↗
          </span>
        </div>

        {/* AVATAR */}

        <div className="member-avatar-wrap">
          <div className="member-avatar">
            {member.initial}
          </div>

          <div className="avatar-ring" />
        </div>

        {/* INFO */}

        <div className="member-info">
          <span className="member-label">
            LEADERSHIP / CODEVARA
          </span>

          <h3>{member.name}</h3>

          <p>{member.role}</p>
        </div>

        {/* FOOTER */}

        <div className="member-footer">
          <span>CODE. CREATE. EVOLVE.</span>

          <span className="member-arrow">
            ↗
          </span>
        </div>

        {/* HOVER EFFECT */}

        <div className="team-card-glow" />

        <div className="team-card-line" />
      </div>
    ))}
  </div>
</section>

        {/* ================= CTA ================= */}

        
<section id="contact" className="cta-section premium-cta-section">
  <div className="cta-grid-bg" />
  <div className="cta-glow cta-glow-one" />
  <div className="cta-glow cta-glow-two" />

  <div className="cta-inner">
    <div className="section-label">06 / LET&apos;S BUILD</div>

    <div className="cta-eyebrow">
      <span className="cta-status-dot" />
      AVAILABLE FOR NEW PROJECTS
    </div>

    <h2>
      Have an idea?
      <br />
      <span>Let&apos;s create it.</span>
    </h2>

    <p className="cta-description">
      Tell us what you&apos;re building. From websites and
      applications to AI-powered solutions, we&apos;ll help
      transform your idea into a powerful digital experience.
    </p>

    <div className="cta-actions">
      <a
        href="mailto:codevara.in@gmail.com"
        className="primary-button large-button cta-main-button"
      >
        Start a Conversation
        <span>↗</span>
      </a>

      <a
        href="mailto:codevara.in@gmail.com"
        className="cta-email"
      >
        codevara.in@gmail.com
      </a>
    </div>

    <div className="cta-meta">
      <span>CODEVARA HI-TECH PRIVATE LIMITED</span>
      <span>CODE. CREATE. EVOLVE.</span>
      <span>SOFTWARE • AI • DIGITAL SOLUTIONS</span>
    </div>
  </div>
</section>

     {/* ================= FOOTER ================= */}

<footer className="footer">
  <div className="footer-top">
    <div>
      <div className="footer-logo">
        <Image
          src="/codevara-logo.png"
          alt="Codevara"
          width={38}
          height={38}
          className="logo-image"
        />

        <span>CODEVARA</span>
      </div>

      <p>
        Codevara Hi-Tech Private Limited
        <br />
        Code. Create. Evolve.
        <br />
        Building technology for what comes next.
      </p>
    </div>

    <div className="footer-links">
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#projects">Projects</a>
      <a href="#team">Team</a>
    </div>

    <div className="footer-social">
      <a
        href="https://www.linkedin.com/company/codevara-hi-tech-private-limited/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn ↗
      </a>

      <a
        href="https://instagram.com/codevara.official"
        target="_blank"
        rel="noreferrer"
      >
        Instagram ↗
      </a>

      <a href="mailto:codevara.in@gmail.com">
        Email ↗
      </a>
    </div>
  </div>

  <div className="footer-bottom">
    <span>
      © 2026 CODEVARA HI-TECH PRIVATE LIMITED
    </span>

    <span>CODE. CREATE. EVOLVE.</span>
  </div>
</footer>

</main>
</>
);
}