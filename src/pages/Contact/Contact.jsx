import Navbar from '../../components/Navbar/Navbar'
import './Contact.css'

const Contact = () => {
  return (
    <div>
        <Navbar/>

        <section id="contact">
            <div className="container">
                <h2>Contact Us</h2>
                <p>If you have any questions or would like to get in touch, please feel free to reach out:</p>
                <div className="contact-form">
                    <form action="#" method="post">
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" required/>
                        </div>
                        <div className="htmlF-group">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" name="email" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="4" required/>
                        </div>
                        <button type="submit" className="btn-primary">Send Message</button>
                    </form>
                </div>
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

export default Contact