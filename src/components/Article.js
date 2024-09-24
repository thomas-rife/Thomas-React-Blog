import { deleteDocument } from '../services/articleService'
import { auth } from '../firebaseConfig'
import { format } from 'date-fns'
import { useState } from 'react'

export default function Article({ onDelete, article }) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  async function delDoc(id) {
    setIsLoading(true)
    try {
      await deleteDocument(id)
      onDelete(id)
    } catch (error) {
      setError('An error occurred during deletion. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <article>
      {!article ? (
        <p className="noneSelected">No article selected</p>
      ) : (
        <section>
          {error && <p className="error">{error}</p>}
          <h2>{article.title}</h2>
          <p className="date">{`Posted on ${format(new Date(article.date.toDate()), 'MM/dd/yyyy')} at ${format(
            new Date(article.date.toDate()),
            'hh:mm a'
          )}`}</p>
          <div dangerouslySetInnerHTML={{ __html: article.body }} className="viewer" />
          {isLoading ? (
            <p>Loading...</p>
          ) : article.uid === auth.currentUser.uid ? (
            <button onClick={() => delDoc(article.id)} className="delete">
              Delete
            </button>
          ) : (
            <p></p>
          )}
        </section>
      )}
    </article>
  )
}
