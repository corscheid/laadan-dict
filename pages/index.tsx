import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Layout from '../components/Layout'
import List from '../components/List'
import { Word } from '../interfaces'
import { getWordsByName } from '../lib/dictionary'

const IndexPage = (): JSX.Element => {
  const [text, setText] = useState("")
  const [data, setData] = useState<Word[]>([])

  const updateResults = (searchText: string): void => {
    setText(searchText)
    setData(getWordsByName(searchText))
  }

  return (
    <Layout title="Láadan Dictionary">
      <h1 className="page-title">Láadan ↔ English Dictionary</h1>
      <div className="flex-container">
        <Form inline className="form search-form" onSubmit={e => { e.preventDefault() }}>
          <FormControl
            id="search"
            className="form-control search-bar mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={text}
            onChange={(e) => { updateResults(e.target.value) }}
            autoComplete="off"
          />
        </Form>
      </div>
      <div className="results">
        {
          text && data && data.length > 0 &&
          <List items={data} />
        }
      </div>
    </Layout>
  )
}

export default IndexPage
