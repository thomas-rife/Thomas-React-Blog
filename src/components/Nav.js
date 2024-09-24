import { useState } from 'react'

export default function Nav({ articles, setArticle }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = event => {
    setSearchTerm(event.target.value)
  }

  const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <nav>
      <div>
        <input
          type="text"
          placeholder="Search articles"
          value={searchTerm}
          onChange={handleSearch}
          className="search"
        />
      </div>
      {!filteredArticles.length ? (
        <p>No articles</p>
      ) : (
        filteredArticles.map(a => (
          <p key={a.id} onClick={() => setArticle(a)}>
            {a.title}
          </p>
        ))
      )}
    </nav>
  )
}
