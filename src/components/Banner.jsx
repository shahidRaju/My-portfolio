import '../styles/Banner.css';
import bannerImage from '../assets/Banner-image.webp'

export default function Banner({ title, description}) {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="page-width">
        <div className="banner__content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  )
}
