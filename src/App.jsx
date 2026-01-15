import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import OurStory from './pages/OurStory'
import Blog from './pages/Blog'


function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
    </>
  )
}

export default App
