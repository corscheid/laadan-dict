import { GetStaticProps, GetStaticPaths } from 'next'
import { Word } from '../../interfaces'
import Layout from '../../components/Layout'
import ListDetail from '../../components/ListDetail'
import { API_URL } from '../../utils/environment'

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
    <Layout
      title={`${item ? item.laadan : 'Word Detail'}`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const response = await fetch(`${API_URL}/all`)
  const dictionaryData: Word[] = await response.json().catch(e => console.log(e))
  const paths = dictionaryData.map((word) => ({
    params: { id: word.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    const response = await fetch(`${API_URL}/all`)
    const dictionaryData: Word[] = await response.json().catch(e => console.log(e))
    const item = dictionaryData.find((data) => data.id.toString() === id)
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item } }
  } catch (err) {
    const error: Error = err as Error
    return { props: { errors: error.message } }
  }
}
