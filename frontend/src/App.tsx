import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { SingleBlogPage } from './pages/SingleBlogPage'
import { AllBlogs } from './pages/AllBlogs'
import { PublishBlog } from './pages/PublishBlog'
import { Landing } from './pages/Landing'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/blogs/:id" element={<SingleBlogPage />} />
          <Route path="/blogs/publish" element={<PublishBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
