import { GetStaticProps } from 'next'
import { Word } from '../../interfaces'
import { API_URL } from '../../utils/environment'
import Layout from '../../components/Layout'
import List from '../../components/List'

type Props = {
  items: Word[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Word List">
    <h1 className="page-title">Word List</h1>
    <List items={items} />
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${API_URL}/all`)
  const items: Word[] = await response.json().catch(e => console.log(e))
  return { props: { items } }
}

export default WithStaticProps