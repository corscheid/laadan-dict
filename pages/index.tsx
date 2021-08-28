import { useState } from 'react'
import useSWR from 'swr'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Layout from '../components/Layout'
import List from '../components/List'

const fetcher = (url: string): Promise<any> => fetch(url).then(res => res.json())

const IndexPage = () => {
  const [text, setText] = useState("")
  const { data, error } = useSWR(`/api/search/${text}`, fetcher)

  return (
    <Layout title="Láadan Dictionary">
      <h1 className="page-title">Láadan ↔ English<br />Dictionary</h1>
      <div className="flex-container">
        <Form inline className="form search-form" onSubmit={e => { e.preventDefault() }}>
          <FormControl
            id="search"
            className="form-control search-bar mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={text}
            onChange={(e) => { setText(e.target.value) }}
            autoComplete="off"
          />
        </Form>
      </div>
      <div className="results">
        {
          !error && text && data && data.length > 0 &&
          <List items={data} />
        }
      </div>
    </Layout>
  )
}

export default IndexPage
