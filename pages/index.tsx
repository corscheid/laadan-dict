import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Layout from '../components/Layout'
import List from '../components/List'
import { API_URL } from '../utils/environment'

const IndexPage = () => {
  const [text, setText] = useState("")
  const [data, setData] = useState([])

  const fetchData = async (newText: string = "") => {
    const response = await fetch(`${API_URL}/search/${newText}`)
    const newData = await response.json().catch(e => console.log(e))
    setText(newText)
    setData(newData)
  }

  useEffect(() => { fetchData() }, [])

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
            onChange={(e) => { fetchData(e.target.value) }}
          />
        </Form>
      </div>
      <div className="results">
        {
          text && data.length > 0 &&
          <List items={data} />
        }
      </div>
    </Layout>
  )
}

export default IndexPage
