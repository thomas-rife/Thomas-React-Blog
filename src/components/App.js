import { useEffect, useState } from 'react'
import Nav from './Nav'
import Article from './Article'
import ArticleEntry from './ArticleEntry'
import { SignIn, SignOut, useAuthentication } from '../services/authService'
import { fetchArticles, createArticle } from '../services/articleService'
import './App.css'
import ProfilePhoto from './ProfilePhoto'

export default function App() {
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState(null)
  const [writing, setWriting] = useState(false)
  const user = useAuthentication()
  const [profilePhotoURL, setProfilePhotoURL] = useState('')

  // This is a trivial app, so just fetch all the articles only when
  // a user logs in. A real app would do pagination. Note that
  // "fetchArticles" is what gets the articles from the service and
  // then "setArticles" writes them into the React state.
  const handleDeleteArticle = articleId => {
    setArticles(prevArticles => prevArticles.filter(article => article.id !== articleId))
    if (article && article.id === articleId) {
      setArticle(null)
    }
  }

  useEffect(() => {
    if (!user) {
      setProfilePhotoURL(null)
      document.title = "Thomas Rife's Blog"
    } else {
      fetchArticles().then(setArticles)
      setProfilePhotoURL(user.photoURL)
      document.title = "Thomas Rife's Blog"
    }
  }, [user])

  // Update the "database" *then* update the internal React state. These
  // two steps are definitely necessary.
  function addArticle({ title, body }) {
    createArticle({ title, body }).then(article => {
      setArticle(article)
      setArticles([article, ...articles])
      setWriting(false)
    })
  }

  return (
    <div className="App">
      <header>
        <h1 className="title">
          <a href="https://blogapp-58ba1.web.app/" className="title">
            Thomas Rife's Blog
          </a>
        </h1>
        {user && (
          <button onClick={() => setWriting(true)} className="newArticle">
            New Article
          </button>
        )}
        <ProfilePhoto photoURL={profilePhotoURL} className="addedprofile" />
        {!user ? <SignIn /> : <SignOut />}
      </header>

      {!user ? '' : <Nav articles={articles} setArticle={setArticle} />}

      {!user ? (
        ''
      ) : writing ? (
        <ArticleEntry addArticle={addArticle} />
      ) : (
        <Article article={article} onDelete={handleDeleteArticle} />
      )}
    </div>
  )
}
