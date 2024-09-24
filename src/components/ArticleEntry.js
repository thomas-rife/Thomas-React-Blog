import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function ArticleEntry({ user, addArticle }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [error, setError] = useState(null)

  function submit(e) {
    setError(null)
    e.preventDefault()
    if (!title.trim() || !body.trim()) {
      setError('Both the title and body must be supplied')
    } else {
      addArticle({ title, body })
    }
  }

  return (
    <div>
      <form onSubmit={submit}>
        {error && <p className="error">{error}</p>}
        <p className="entrytitle">Title</p>
        <input className="entryinput" value={title} onChange={e => setTitle(e.target.value)} maxLength={33} />
        <p className="entrytitle">Body</p>
        <ReactQuill theme="snow" value={body} onChange={setBody} />
        <button className="submit" type="submit">
          Create Post
        </button>
      </form>
      <a className="abort" href="https://blogapp-58ba1.web.app/">
        Cancel
      </a>
    </div>
  )
}
