import React from 'react';
import './App.css';

// 1. Componente Navbar
const Navbar = () => (
  <nav>
    <div className="logo">CASA <span>NOGAL</span></div>
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Catálogo</a></li>
      <li><a href="#">Tendencias</a></li>
      <li><a href="#">Personalización</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </nav>
);

// 2. Componente Hero
const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>Diseño que <span>transforma</span> hogares.</h1>
      <p>
        Muebles minimalistas, modernos y funcionales diseñados para adaptarse a tu estilo de vida. 
        Creamos espacios elegantes inspirados en las tendencias más buscadas de la actualidad.
      </p>
      <a href="#" className="btn btn-primary">Ver Catálogo</a>
      <a href="#" className="btn btn-secondary">Cotizar Ahora</a>
    </div>
  </section>
);

// 3. Componente Beneficios
const Benefits = () => {
  const cardsData = [
    { icon: "🛋️", title: "Minimalismo Moderno", desc: "Diseños elegantes y limpios que elevan cualquier ambiente." },
    { icon: "📦", title: "Muebles Funcionales", desc: "Optimiza tus espacios con muebles inteligentes y prácticos." },
    { icon: "🏠", title: "Adaptables", desc: "Perfectos para departamentos, oficinas y hogares modernos." },
    { icon: "🪵", title: "Materiales Premium", desc: "Acabados resistentes inspirados en diseño contemporáneo." }
  ];

  return (
    <section className="benefits">
      <div className="section-title">
        <h2>Diseño inteligente para cada espacio</h2>
        <p>Creamos muebles que combinan estética premium, funcionalidad y adaptación perfecta para hogares modernos.</p>
      </div>
      <div className="cards">
        {cardsData.map((card, i) => (
          <div className="card" key={i}>
            <div className="icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// 4. Componente Categorías
const Categories = () => {
  const categoriesData = [
    { img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop", title: "Home Office", desc: "Escritorios modernos y setups minimalistas." },
    { img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop", title: "Espacios Pequeños", desc: "Muebles multifuncionales y almacenamiento inteligente." },
    { img: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1200&auto=format&fit=crop", title: "Sala Moderna", desc: "Elegancia contemporánea para transformar tu hogar." }
  ];

  return (
    <section className="categories">
      <div className="section-title">
        <h2>Lo más buscado</h2>
        <p>Las tendencias que dominan el diseño interior moderno.</p>
      </div>
      <div className="category-grid">
        {categoriesData.map((cat, i) => (
          <div className="category" key={i}>
            <img src={cat.img} alt={cat.title} />
            <div className="overlay">
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// 5. Componente Galería
const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1200&auto=format&fit=crop"
  ];

  return (
    <section className="gallery">
      <div className="section-title">
        <h2>Transforma tu espacio</h2>
        <p>No vendemos muebles. Creamos espacios que inspiran.</p>
      </div>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <img src={src} alt={`Galería ${i + 1}`} key={i} />
        ))}
      </div>
    </section>
  );
};

// 6. Componente Personalización
const Custom = () => {
  const features = [
    "Medidas Personalizadas",
    "Colores Premium",
    "Diseños Minimalistas",
    "Materiales Modernos",
    "Estilo Nogal + Negro"
  ];

  return (
    <section className="custom">
      <h2>Muebles adaptados a ti</h2>
      <p>Creamos soluciones personalizadas para hogares modernos, oficinas y espacios funcionales.</p>
      <div className="features">
        {features.map((feat, i) => (
          <div className="feature" key={i}>{feat}</div>
        ))}
      </div>
    </section>
  );
};

// 7. Componente Tendencias
const Trends = () => {
  const trendsData = [
    { title: "🖤 Negro + Nogal", desc: "La combinación premium más elegante y moderna." },
    { title: "✨ Minimalismo cálido", desc: "Espacios limpios pero acogedores y sofisticados." },
    { title: "🏡 Home Office", desc: "El trabajo desde casa sigue impulsando muebles funcionales." },
    { title: "📦 Multifuncionalidad", desc: "Muebles inteligentes que aprovechan cada metro." }
  ];

  return (
    <section className="trends">
      <div className="section-title">
        <h2>Tendencias 2026</h2>
        <p>Inspirados en lo que las personas más buscan actualmente en diseño interior.</p>
      </div>
      <div className="trend-grid">
        {trendsData.map((trend, i) => (
          <div className="trend" key={i}>
            <h3>{trend.title}</h3>
            <p>{trend.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// 8. Componente Testimonios
const Testimonials = () => {
  const testimonialsData = [
    "“Mi departamento se ve completamente diferente. Moderno, elegante y funcional.”",
    "“La calidad superó mis expectativas. Se siente premium desde el primer momento.”",
    "“Perfecto para espacios pequeños. Diseño increíble y muy práctico.”"
  ];

  return (
    <section className="testimonials">
      <div className="section-title">
        <h2>Lo que dicen nuestros clientes</h2>
      </div>
      <div className="testimonial-grid">
        {testimonialsData.map((text, i) => (
          <div className="testimonial" key={i}>
            <div className="stars">★★★★★</div>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// 9. Componente CTA (Call to Action)
const CTA = () => (
  <section className="cta">
    <h2>Convierte cualquier espacio en algo extraordinario.</h2>
    <a href="#" className="btn btn-primary">Comprar Ahora</a>
    <a href="#" className="btn btn-secondary">WhatsApp</a>
  </section>
);

// 10. Componente Footer
const Footer = () => (
  <footer>
    <div className="footer-grid">
      <div>
        <div className="footer-logo">CASA <span>NOGAL</span></div>
        <p style={{ marginTop: '15px' }}>Diseño que transforma hogares.</p>
      </div>
      <div className="footer-links">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">TikTok</a>
        <a href="#">WhatsApp</a>
        <a href="#">Catálogo</a>
        <a href="#">Contacto</a>
      </div>
    </div>
    <div className="copy">
      © 2026 CASA NOGAL — Todos los derechos reservados.
    </div>
  </footer>
);

// Componente Raíz del Proyecto
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <Categories />
      <Gallery />
      <Custom />
      <Trends />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;