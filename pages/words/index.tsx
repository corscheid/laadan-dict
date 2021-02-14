import { GetStaticProps } from 'next'
import { Word } from '../../interfaces'
import { dictionaryData } from '../../utils/dictionary'
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
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Word[] = dictionaryData
  return { props: { items } }
}

export default WithStaticProps