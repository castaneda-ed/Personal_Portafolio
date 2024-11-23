import "../styles/ContactMe.css";

export default function ContactMe() {
  return (
    <div id="contact" className="contact-container">
      <h2 className="get-in-contact">Get in touch with me</h2>
      <form action="https://formspree.io/f/xyzydzlj" method="POST">
        <label>
          <input type="text" name="name" id="name" placeholder="Name" />
        </label>
        <label>
          <input type="email" name="email" id="email" placeholder="Email" />
        </label>
        <label>
          <textarea
            className="your-message"
            name="message"
            id="message"
            placeholder="Your message"
          ></textarea>
        </label>
        <button className="submit-message" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
