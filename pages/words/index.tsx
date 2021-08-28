import { GetStaticProps } from 'next'
import { Word } from '../../interfaces'
import { getAllWords } from '../../lib/dictionary'
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

export const getStaticProps: GetStaticProps = () => {
  const items: Word[] = getAllWords()
  return { props: { items } }
}

export default WithStaticProps