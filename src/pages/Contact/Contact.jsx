import './Contact.css';

export default function Contact() {
    return (
      <div className="contact-container">
        <div>
          {/* Contact Form */}
          <section>
            <h2>Send a Treat</h2>
            <form>
              <div>
                <label htmlFor="name">Candy Lover Name</label>
                <br />
                <input type="text" id="name" name="name" placeholder="Your Sweet Name" required />
              </div>

              <div>
                <label htmlFor="email">Candy Email</label>
                <br />
                <input type="email" id="email" name="email" placeholder="you@sweetmail.com" required />
              </div>

              <div>
                <label htmlFor="message">Message to Candy HQ</label>
                <br />
                <textarea id="message" name="message" rows="5" placeholder="Write your sugary thoughts here..." required></textarea>
              </div>

              <div>
                <button type="submit">Send Sweetness</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    );
  }
