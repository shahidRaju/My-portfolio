import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import "../styles/RichText.css";

export default function RichText() {
  const navigate = useNavigate();
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch("/src/content/home.json")
      .then(res => res.json())
      .then(data => setContent(data));
  }, []);

  if (!content) return null;

  return (
    <section className="rich-text">
      <div className="page-width">
        <div className="rich-text__col">
          <h2 className="title">{content.title}</h2>
          <button onClick={() => navigate('/blog')}>
            {content.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
