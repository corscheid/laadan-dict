import { GetStaticProps, GetStaticPaths } from 'next'
import { Word } from '../../interfaces'
import Layout from '../../components/Layout'
import ListDetail from '../../components/ListDetail'
import { getAllWords, getWordById } from '../../lib/dictionary'

type Props = {
  item?: Word
  errors?: string
}

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout title={`${item ? item.laadan : 'Word Detail'}`}>
      {item && <ListDetail item={item} />}
    </Layout>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = () => {
  // Get the paths we want to pre-render based on users
  const dictionaryData: Word[] = getAllWords()
  const paths = dictionaryData.map((_word, index) => ({ params: { id: index.toString() } }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = ({ params }) => {
  try {
    if (params == null) { throw new Error('Id must exist') }
    if (typeof params.id !== 'string') { throw new Error('Id must be string, not array') }
    const id: number = parseInt(params.id)
    const item: Word = getWordById(id)
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item } }
  } catch (err) {
    const error: Error = err as Error
    return { props: { errors: error.message } }
  }
}
