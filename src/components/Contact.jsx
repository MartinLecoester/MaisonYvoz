function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Nous trouver</h2>
        <div className="contact-grid">
          <div className="contact-item">
            <h3>Adresse</h3>
            <p>
              <a
                href="https://maps.app.goo.gl/cpeGdyk5i5s6fvNe7"
                target="_blank"
                rel="noopener noreferrer"
              >
                50 rue Belle Croix
                <br />
                59890 Quesnoy-sur-Deûle
              </a>
            </p>
          </div>
          <div className="contact-item">
            <h3>Horaires</h3>
            <p>
              Lundi – Vendredi : 6h30h – 19h
              <br />
              Dimanche : 6h30h – 13h
              <br />
              Fermé le Mercredi
            </p>
          </div>
          <div className="contact-item">
            <h3>Téléphone</h3>
            <p>
              <a href="tel:+33300000000">03 00 00 00 00</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
