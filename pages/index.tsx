import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import List from '../components/List'
import { Word } from '../interfaces'
// import { dictionaryData } from '../utils/dictionary'

const API_URL: RequestInfo = 'http://localhost:8080/word/search'

const IndexPage = () => {
  const initialText: string = ""
  const initialData: Word[] = []
  const [text, setText] = useState(initialText)
  const [data, setData] = useState(initialData)

  const fetchData = async (newText: string) => {
    console.log(`GET ${API_URL}/${newText}`)

    const response = await fetch(`${API_URL}/${text}`)
    const newData = await response.json().catch(e => console.log(e))

    console.log({ newData })

    setText(newText)
    setData(newData)
  }

  useEffect(() => { fetchData("") }, [])

  return (
    <Layout title="Láadan Dictionary">
      <h1 className="page-title">Láadan ↔ English Dictionary</h1>
      <div className="flex-container">
        <form className="form-inline my-2 my-lg-0 search-form" onSubmit={e => { e.preventDefault() }}>
          <input
            id="search"
            className="form-control mr-sm-2 search-bar"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={text}
            onChange={(e) => { fetchData(e.target.value) }}
          />
        </form>
      </div>
      <div className="results">
        {text && data.length > 0 && <List items={data.filter(w => (w.laadan.includes(text)) || w.english.includes(text))} />}
      </div>
    </Layout>
  )
}

export default IndexPage
