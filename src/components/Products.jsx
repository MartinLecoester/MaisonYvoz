const products = [
  {
    icon: '🥖',
    name: 'Pains',
    description: 'Tradition, campagne, seigle, céréales… cuits à la perfection chaque matin.',
  },
  {
    icon: '🥐',
    name: 'Viennoiseries',
    description: 'Croissants feuilletés, pains au chocolat et brioches artisanales.',
  },
  {
    icon: '🎂',
    name: 'Pâtisseries',
    description: 'Tartes, entremets et douceurs préparés avec amour.',
  },
  {
    icon: '🥪',
    name: 'Snacking',
    description: 'Sandwichs frais et formules à emporter pour le déjeuner.',
  },
]

function Products() {
  return (
    <section className="products" id="produits">
      <div className="container">
        <h2>Nos produits</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.name} className="product-card">
              <div className="icon">{product.icon}</div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
