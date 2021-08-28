import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="About">
    <h1 className="page-title">About</h1>
    <h2 className="page-subtitle">Wil sha!</h2>

    <p>
      This Láadan dictionary web app was created
      by <a rel="noopener noreferrer" target="_blank" href="https://corscheid.dev">corscheid</a> (Corey Scheideman)
      with the hope that anyone learning Láadan might find it useful.<br />
      The source code is available
      on <a rel="noopener noreferrer" target="_blank" href="https://github.com/corscheid/laadan-dict">GitHub</a>
    </p>

    <h2 className="page-subtitle">Credits</h2>
    <ul>
      <li>Láadan language created by Suzette Haden Elgin</li>
      <li>Initial dictionary data JSON data file compiled by Rachel Singh
        at <a rel="noopener noreferrer" target="_blank" href="http://data.ayadanconlangs.com/">data.ayadanconlangs.com</a>
      </li>
      <li>Automatic deployment and hosting provided
        by <a rel="noopener noreferrer" target="_blank" href="https://vercel.com">Vercel</a>
      </li>
    </ul>
  </Layout>
)

export default AboutPage
