import { useState } from 'react'
import Layout from '../components/Layout'
import List from '../components/List'
import { dictionaryData } from '../utils/dictionary'

const IndexPage = () => {
  const [text, setText] = useState("")

  return (
    <Layout title="Láadan Dictionary">
      <h1 className="page-title">Láadan ↔ English Dictionary</h1>
      <div className="flex-container">
        <form className="form-inline my-2 my-lg-0 search-form">
          <input
            id="search"
            className="form-control mr-sm-2 search-bar"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={text}
            onChange={(e) => { setText(e.target.value) }}
          />
        </form>
      </div>
      <div className="results">
        {text && <List items={dictionaryData.filter(w => (w.láadan.includes(text)) || w.english.includes(text))} />}
      </div>
    </Layout>
  )
}

export default IndexPage
