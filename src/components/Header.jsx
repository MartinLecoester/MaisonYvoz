function Header() {
  return (
    <header className="header">
      <div className="header-inner container">
        <div className="logo">
          <h1>Maison Yvoz</h1>
          <span>Boulangerie Artisanale</span>
        </div>
        <nav className="nav">
          <a href="#accueil">Accueil</a>
          <a href="#presentation">Notre boulangerie</a>
          <a href="#produits">Produits</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
