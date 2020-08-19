import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Làadan Dictionary">
    <h1 className="page-title">Làadan ↔ English Dictionary</h1>
    <div className="flex-container">
      <form className="form-inline my-2 my-lg-0 search-form">
        <input
          className="form-control mr-sm-2 search-bar"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn my-2 my-sm-0 search-btn"
          type="submit"
        >
          Search
        </button>
      </form>
      <div className="results"></div>
    </div>
  </Layout>
)

export default IndexPage
