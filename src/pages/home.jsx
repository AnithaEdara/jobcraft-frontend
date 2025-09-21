import React from "react";
import { Link } from "react-router-dom";
import "../home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const jobs = [
  {
    type: "Full Time",
    location: "Remote",
    logo: "https://logo.clearbit.com/google.com",
    title: "Software Developer",
    company: "Google",
    description: "Work on cutting-edge technologies at scale.",
    time: "2h ago",
    salary: "$120K - $150K",
  },
  {
    type: "Internship",
    location: "Bangalore",
    logo: "https://logo.clearbit.com/amazon.com",
    title: "UI/UX Designer Intern",
    company: "Amazon",
    description: "Design intuitive UIs for eCommerce at scale.",
    time: "5h ago",
    salary: "$1K/mo",
  },
  {
    type: "Contract",
    location: "USA",
    logo: "https://logo.clearbit.com/microsoft.com",
    title: "Data Analyst",
    company: "Microsoft",
    description: "Analyze data and support strategic decisions.",
    time: "1d ago",
    salary: "$80K - $100K",
  },
  {
    type: "Part Time",
    location: "Remote",
    logo: "https://logo.clearbit.com/netflix.com",
    title: "Content Curator",
    company: "Netflix",
    description: "Manage and curate media for platform users.",
    time: "3h ago",
    salary: "$60K - $80K",
  },
  {
    type: "Full Time",
    location: "Mumbai",
    logo: "https://logo.clearbit.com/tesla.com",
    title: "Machine Learning Engineer",
    company: "Tesla",
    description: "Build predictive models for autonomous systems.",
    time: "6h ago",
    salary: "$130K - $160K",
  },
  {
    type: "Internship",
    location: "Delhi",
    logo: "https://logo.clearbit.com/zoho.com",
    title: "Frontend Intern",
    company: "Zoho",
    description: "Work on user-facing features using React.",
    time: "1d ago",
    salary: "$800/mo",
  },
  {
    type: "Contract",
    location: "Remote",
    logo: "https://logo.clearbit.com/adobe.com",
    title: "Visual Designer",
    company: "Adobe",
    description: "Create designs for enterprise software UI.",
    time: "2d ago",
    salary: "$90K - $110K",
  },
];

const Home = () => {
  return (
    <div className="home-root" style={{ fontFamily: "Poppins, Inter, sans-serif", background: "#f4f7fb" }}>
      {/* Header */}
      <header
        className="modern-header"
        style={{
          background: "#0d2d66",
          color: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        <div
          className="header-container"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.8rem 2rem",
          }}
        >
          <div className="logo" style={{ fontSize: "2rem", fontWeight: 800, cursor: "default" }}>
            Job Craft
          </div>
          <nav>
            <ul
              className="nav-links"
              style={{
                display: "flex",
                listStyle: "none",
                gap: "1.8rem",
                margin: 0,
                fontSize: "1.05rem",
              }}
            >
              <li>
                <Link style={{ color: "#fff", textDecoration: "none" }} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link style={{ color: "#fff", textDecoration: "none" }} to="/contactus">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link style={{ color: "#fff", textDecoration: "none" }} to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="signup-btn"
                  style={{
                    background: "#fff",
                    color: "#0033cc",
                    borderRadius: 6,
                    padding: "0.3rem 1.2rem",
                    fontWeight: 700,
                  }}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            <div className="menu-toggle" style={{ display: "none" }}>
              ☰
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="main-content">
        <section
          className="hero-section"
          style={{
            position: "relative",
            minHeight: "430px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <img
            src="https://thumbs.dreamstime.com/b/text-sign-showing-re-hiring-conceptual-photo-advertising-employment-workforce-placement-new-job-woman-wear-formal-business-159048722.jpg"
            alt=""
            className="hero-bg"
            style={{
              width: "100%",
              height: "430px",
              objectFit: "cover",
              filter: "brightness(0.72) blur(1px)",
            }}
          />
          <div
            className="hero-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(90deg,rgba(14,40,100,0.8) 40%,rgba(0,50,100,0.4) 100%)",
            }}
          ></div>
          <div
            className="hero-content"
            style={{
              position: "absolute",
              width: "90%",
              maxWidth: "700px",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              zIndex: 2,
              color: "#fff",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: "3.2rem",
                fontWeight: 900,
                textAlign: "center",
                letterSpacing: "-1px",
                marginBottom: "1rem",
                textShadow: "2px 2px 8px #0005",
                lineHeight: 1.2,
              }}
            >
              Where Talent Meets Opportunity.
              <br />
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "2rem",
                  display: "block",
                  marginTop: "0.8rem",
                }}
              >
                Unlock career opportunities around the world
              </span>
            </h1>
            <form
              className="search-box"
              style={{
                margin: "2.5rem auto 0",
                display: "flex",
                background: "#fff",
                borderRadius: 14,
                boxShadow: "0 3px 20px rgba(0,52,170,0.14)",
                gap: 14,
                maxWidth: 600,
                alignItems: "center",
                padding: 12,
              }}
            >
              <input
                type="text"
                placeholder="Job title or keyword"
                style={{
                  padding: "1.15rem 20px",
                  border: "none",
                  borderRadius: 10,
                  outline: "none",
                  flex: 1,
                  fontSize: "1.35rem",
                  background: "#f6f8fc",
                }}
              />
              <select
                style={{
                  padding: "1.15rem 14px",
                  border: "none",
                  borderRadius: 10,
                  outline: "none",
                  fontSize: "1.25rem",
                  background: "#f6f8fc",
                }}
              >
                <option value="">Location</option>
                <option value="remote">Remote</option>
                <option value="bangalore">Bangalore</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
              </select>
              <button
                className="search-btn"
                style={{
                  padding: "1.15rem 2.4rem",
                  borderRadius: 10,
                  border: "none",
                  background: "linear-gradient(90deg,#0d2d66,#2f77ff)",
                  color: "#fff",
                  fontWeight: "bold",
                  boxShadow: "0 2px 8px #0033cc44",
                  fontSize: "1.26rem",
                  transition: "0.2s",
                }}
              >
                Search
              </button>
            </form>
          </div>
        </section>

        {/* Featured Jobs */}
        <section
          className="section featured-jobs-style2"
          style={{ maxWidth: 1280, margin: "auto", marginBottom: "2.5rem" }}
        >
          <h2
            style={{
              textAlign: "center",
              fontWeight: 800,
              fontSize: "2rem",
              marginBottom: 32,
            }}
          >
            🔥 Featured Jobs
          </h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={28}
            slidesPerView={3}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ paddingBottom: "2.5rem" }}
          >
            {jobs.map((job, index) => (
              <SwiperSlide key={index}>
                <div
                  className="job-card2"
                  style={{
                    background: "#fff",
                    borderRadius: 13,
                    boxShadow: "0 2px 18px #276ae225",
                    padding: "1.3rem 1rem",
                    margin: "0.8rem 0",
                    minHeight: 270,
                    transition: "0.2s",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 12,
                    }}
                  >
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: 9,
                        background: "#f3f6fa",
                        objectFit: "contain",
                        margin: "0 auto",
                      }}
                    />
                    <div style={{ textAlign: "center", flex: 1 }}>
                      <h3
                        className="job-title"
                        style={{
                          color: "#20295b",
                          fontWeight: 900,
                          fontSize: "1.2rem",
                          marginBottom: 4,
                        }}
                      >
                        {job.title}
                      </h3>
                      <span
                        className="job-company"
                        style={{
                          color: "#678",
                          fontWeight: 600,
                          fontSize: "1.05rem",
                        }}
                      >
                        {job.company}
                      </span>
                    </div>
                  </div>
                  <p
                    className="job-desc"
                    style={{ color: "#364969", fontSize: "1.05rem", marginBottom: 10, textAlign: "center" }}
                  >
                    {job.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginTop: "auto",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ display: "flex", gap: 2 }}>
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className="fas fa-star"
                          style={{ color: "#2e55fa", fontSize: "1.6rem", margin: "0 2px" }}
                        ></i>
                      ))}
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: "auto",
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.97rem",
                      color: "#7cb",
                      marginTop: 14,
                      padding: "0 20px",
                      fontWeight: 700,
                      letterSpacing: "1px",
                    }}
                  >
                    <span>{job.location}</span>
                    <span style={{ color: "#f93" }}>{job.salary}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <hr style={{ margin: "2rem 0", border: "none", borderTop: "1.5px solid #eaf1fb" }} />

        {/* Top Companies */}
        <section
          className="top-companies-section"
          style={{ textAlign: "center", padding: "2.7rem 0", background: "#f8fbff" }}
        >
          <h2
            style={{
              fontWeight: 800,
              marginBottom: 34,
              color: "#133877",
            }}
          >
            🏢 Top Companies Hiring
          </h2>
          <Swiper
            modules={[Pagination]}
            slidesPerView={4}
            spaceBetween={34}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            style={{ padding: "2rem 0", maxWidth: "1200px", margin: "0 auto" }}
          >
            {[
              {
                name: "Google",
                logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
                openings: "120+ openings",
              },
              {
                name: "Amazon",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
                openings: "85+ openings",
              },
              {
                name: "Microsoft",
                logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
                openings: "60+ openings",
              },
              {
                name: "Netflix",
                logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
                openings: "30+ openings",
              },
              {
                name: "Facebook",
                logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
                openings: "50+ openings",
              },
              {
                name: "Apple",
                logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
                openings: "70+ openings",
              },
            ].map((company, i) => (
              <SwiperSlide key={i}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "11px",
                    boxShadow: "0 2px 18px #287acd17",
                    padding: "1rem 0.5rem",
                    margin: "12px 0",
                    transition: "0.2s",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 150,
                  }}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    style={{
                      width: 80,
                      height: 80,
                      objectFit: "contain",
                      marginBottom: 12,
                    }}
                  />
                  <div
                    style={{ fontSize: "1.08rem", color: "#222", fontWeight: 700, textAlign: "center" }}
                  >
                    {company.name}
                  </div>
                  <div
                    style={{ fontSize: "0.97rem", color: "#6a7", fontWeight: 700, textAlign: "center" }}
                  >
                    {company.openings}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <hr style={{ margin: "2rem 0", border: "none", borderTop: "1.5px solid #e7eefa" }} />

        {/* Testimonials */}
        <section style={{ background: "#f4f7fb", padding: "3rem 1rem" }}>
          <h2
            style={{ textAlign: "center", color: "#234baa", fontWeight: 700, marginBottom: "2rem" }}
          >
            ⭐ Success Stories
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "3rem",
              flexWrap: "wrap",
            }}
          >
            {[
              {
                name: "Alex",
                role: "Frontend Developer",
                feedback: "Job Craft helped me land my dream job within a month!",
                img: "https://randomuser.me/api/portraits/men/45.jpg",
              },
              {
                name: "Sara",
                role: "Marketing Analyst",
                feedback: "A fantastic platform to grow professionally!",
                img: "https://randomuser.me/api/portraits/women/68.jpg",
              },
              {
                name: "David",
                role: "Full Stack Engineer",
                feedback: "Thanks to Job Craft, I switched to a better company with great benefits.",
                img: "https://randomuser.me/api/portraits/men/75.jpg",
              },
              {
                name: "Priya",
                role: "UX Designer",
                feedback: "I found exactly the kind of job I was looking for. Highly recommend!",
                img: "https://randomuser.me/api/portraits/women/25.jpg",
              },
            ].map((user, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: "13px",
                  padding: "2rem 1.2rem 1.2rem 1.2rem",
                  maxWidth: "310px",
                  minWidth: "200px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.09)",
                  textAlign: "center",
                  margin: "1.1rem 0",
                }}
              >
                <img
                  src={user.img}
                  alt={user.name}
                  style={{
                    borderRadius: "50%",
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    marginBottom: "1.2rem",
                    boxShadow: "0 0 0 5px #ebf0ff",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <h4 style={{ marginTop: "0.2rem", fontWeight: 700 }}>{user.name}</h4>
                <div style={{ fontWeight: 600, color: "#5c76af", fontSize: "1.02rem" }}>{user.role}</div>
                <p style={{ fontStyle: "italic", color: "#222", marginTop: "1.1rem" }}>“{user.feedback}”</p>
              </div>
            ))}
          </div>
        </section>

        <hr style={{ margin: "2rem 0", border: "none", borderTop: "1.5px solid #e7eefa" }} />

        {/* How It Works */}
        <section
          className="section how-it-works"
          style={{ maxWidth: 1280, margin: "auto", marginBottom: "3rem", padding: "2rem 0" }}
        >
          <h2
            style={{
              textAlign: "center",
              fontWeight: "800",
              fontSize: "2rem",
              marginBottom: "2rem",
            }}
          >
            How It Works
          </h2>
          <div
            className="steps"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2.6rem",
              flexWrap: "wrap",
            }}
          >
            <div
              className="step"
              style={{
                background: "#fafcff",
                borderRadius: 11,
                padding: "2rem 1.6rem",
                minWidth: 180,
                textAlign: "center",
                boxShadow: "0 2px 10px #5552",
              }}
            >
              <i
                className="fas fa-user-plus"
                style={{ fontSize: "2.4rem", color: "#2d7bf3", marginBottom: 12 }}
              ></i>
              <h3 style={{ margin: ".6rem 0", fontWeight: "bold" }}>Sign Up</h3>
              <p style={{ color: "#465" }}>Create your free account</p>
            </div>
            <div
              className="step"
              style={{
                background: "#fafcff",
                borderRadius: 11,
                padding: "2rem 1.6rem",
                minWidth: 180,
                textAlign: "center",
                boxShadow: "0 2px 10px #5552",
              }}
            >
              <i
                className="fas fa-file-alt"
                style={{ fontSize: "2.4rem", color: "#e5aa39", marginBottom: 12 }}
              ></i>
              <h3 style={{ margin: ".6rem 0", fontWeight: "bold" }}>Build Profile</h3>
              <p style={{ color: "#465" }}>Add your skills and experience</p>
            </div>
            <div
              className="step"
              style={{
                background: "#fafcff",
                borderRadius: 11,
                padding: "2rem 1.6rem",
                minWidth: 180,
                textAlign: "center",
                boxShadow: "0 2px 10px #5552",
              }}
            >
              <i
                className="fas fa-search"
                style={{ fontSize: "2.4rem", color: "#46b6a6", marginBottom: 12 }}
              ></i>
              <h3 style={{ margin: ".6rem 0", fontWeight: "bold" }}>Find Jobs</h3>
              <p style={{ color: "#465" }}>Browse and apply easily</p>
            </div>
            <div
              className="step"
              style={{
                background: "#fafcff",
                borderRadius: 11,
                padding: "2rem 1.6rem",
                minWidth: 180,
                textAlign: "center",
                boxShadow: "0 2px 10px #5552",
              }}
            >
              <i
                className="fas fa-rocket"
                style={{ fontSize: "2.4rem", color: "#e25a9d", marginBottom: 12 }}
              ></i>
              <h3 style={{ margin: ".6rem 0", fontWeight: "bold" }}>Get Hired</h3>
              <p style={{ color: "#465" }}>Start your new journey</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{ background: "#19325c", color: "#fff", padding: "2.1rem 0 0.4rem 0" }}
      >
        <div
          className="footer-content"
          style={{
            maxWidth: 1280,
            margin: "auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div className="about-us" style={{ flex: 1, minWidth: 160 }}>
            <h3 style={{ fontWeight: 700 }}>About Us</h3>
            <p>
              We connect job seekers and recruiters worldwide, making hiring
              seamless and efficient.
            </p>
          </div>
          <div className="feedback" style={{ flex: 1, minWidth: 160 }}>
            <h3 style={{ fontWeight: 700 }}>Feedback</h3>
            <textarea
              placeholder="Your feedback"
              style={{
                width: "100%",
                borderRadius: 8,
                border: "none",
                padding: "0.5em",
                minHeight: 70,
                marginBottom: "0.6em",
              }}
            ></textarea>
            <button
              style={{
                border: "none",
                background: "#fff",
                color: "#19325c",
                borderRadius: 7,
                padding: "0.5em 1.2em",
                fontWeight: 700,
                transition: "0.2s",
              }}
            >
              Submit
            </button>
          </div>
          <div className="quick-links" style={{ flex: 1, minWidth: 160 }}>
            <h3 style={{ fontWeight: 700 }}>Quick Links</h3>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li>
                <a href="#" style={{ color: "#b9cbee" }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#b9cbee" }}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#b9cbee" }}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#b9cbee" }}>
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="social-media" style={{ flex: 1, minWidth: 160 }}>
            <h3 style={{ fontWeight: 700 }}>Follow Us</h3>
            <div
              className="social-icons"
              style={{ display: "flex", gap: "0.9em", fontSize: "1.3em" }}
            >
              <a href="#" className="social-icon">
                <i className="fab fa-facebook" style={{ color: "#fff" }}></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter" style={{ color: "#fff" }}></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram" style={{ color: "#fff" }}></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin" style={{ color: "#fff" }}></i>
              </a>
            </div>
          </div>
        </div>
        <hr style={{ margin: "2rem 0 1rem 0", border: "none", borderTop: "1.5px solid #395895" }} />
        <div
          className="footer-bottom"
          style={{ textAlign: "center", fontSize: "1.03rem", color: "#d5e8ff" }}
        >
          <p>© 2025 Job Craft. All rights reserved. | Connecting talent with opportunity globally.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
