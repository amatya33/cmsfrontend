import './About.css'

const About = () => {
  return (
    <div>
        <header>
            <nav>
                <div className="container">
                    <h1><a href="index.html">Digital Pathshala</a></h1>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="courses.html">Courses</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li className="current"><a href="about.html">About</a></li>
                    </ul>
                </div>
            </nav>
        </header>

        <section id="about">
            <div className="container">
                <h2>About Digital Pathshala</h2>
                <p>Welcome to Digital Pathshala, your premier destination for digital learning.</p>

                <h3>Our Mission</h3>
                <p>At Digital Pathshala, our mission is to provide high-quality, accessible, and affordable online education to learners worldwide. We believe in the power of education to transform lives and empower individuals to achieve their goals.</p>

                <h3>Our Story</h3>
                <p>Founded in [Year], Digital Pathshala started as a small initiative with a big vision. Over the years, we have grown into a trusted platform for learners of all backgrounds and levels. Our team of dedicated educators and experts are committed to delivering top-notch courses and resources that help our students thrive in the digital age.</p>

                <h3>Why Choose Digital Pathshala?</h3>
                <ul>
                    <li>Wide range of courses in various disciplines.</li>
                    <li>Experienced instructors who are experts in their fields.</li>
                    <li>Flexible learning options to fit your schedule.</li>
                    <li>Interactive and engaging learning materials.</li>
                    <li>Community support and networking opportunities.</li>
                </ul>

                <h3>Contact Us</h3>
                <p>If you have any questions or would like to get in touch, please feel free to reach out:</p>
                <a href="mailto:contact@digitalpathshala.com" className="btn-secondary">Email Us</a>
            </div>
        </section>

        <footer>
            <div className="container">
                <p>&copy; 2023 Digital Pathshala</p>
            </div>
        </footer>
    </div>
  )
}

export default About