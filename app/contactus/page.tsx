import Header from "../header.jsx";
import Footer from "../footer.jsx";

function Contact() {
  return (
    <>
      <Header />
      <div id="contact_page">
        <div id="contact_div">
          <center>
            <img src="/logo.png" alt="image non dispo" id="logo" />{" "}
          </center>
          <h2>Contactez-nous</h2>
          <form method="POST" action="http://localhost/contact.php">
            <div className="row">
              <div className="field">
                <label>Prénom</label>
                <input
                  type="text"
                  placeholder="Votre prénom"
                  name="first_name"
                />
              </div>
              <div className="field">
                <label>Nom</label>
                <input type="text" placeholder="Votre nom" name="last_name" />
              </div>
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                placeholder="exemple@email.com"
                name="email"
              />
            </div>

            <div className="field">
              <label>Message</label>
              <textarea
                placeholder="Écrivez votre message..."
                name="message"
              ></textarea>
            </div>

            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
