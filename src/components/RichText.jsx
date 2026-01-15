import { useNavigate } from 'react-router-dom';
import "../styles/RichText.css"

export default function RichText() {
    const navigate = useNavigate();
    return (
        <section class="rich-text">
            <div className="page-width">
                <div className="rich-text__col">
                    <h2 className="title">hello world</h2>
                    <button onClick={() => navigate('/blog')}>view blog</button>
                </div>
            </div>
        </section>
    )
}