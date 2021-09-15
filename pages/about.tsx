import Layout from '../components/Layout'

interface NewTabLinkProps {
  href: string
  children: string
}

const NewTabLink = ({ href, children }: NewTabLinkProps): JSX.Element => {
  return <a rel="noopener noreferrer" target="_blank" href={href}>{children}</a>
}

const AboutPage = () => (
  <Layout title="About">
    <div className="flex-container">
      <div className="about-content">
        <h1 className="page-title">About</h1>
        <h2 className="page-subtitle">Wil sha!</h2>
        <p>
          This Láadan dictionary web app was created with the hope that anyone learning Láadan might find it useful.
          <br />
          The source code is available
          on <NewTabLink href="https://github.com/corscheid/laadan-dict">GitHub</NewTabLink>
        </p>
        <h2 className="page-subtitle">Credits</h2>
        <ul>
          <li>Developed by <NewTabLink href="https://corscheid.dev">Corey Scheideman</NewTabLink></li>
          <li>UI designed by Morgan Hughes</li>
          <li>Láadan language created by Suzette Haden Elgin</li>
          <li>Initial dictionary data JSON data file compiled by Rachel Singh
            at <NewTabLink href="http://data.ayadanconlangs.com">data.ayadanconlangs.com</NewTabLink>
          </li>
          <li>Automatic deployment and hosting provided
            by <NewTabLink href="https://vercel.com">Vercel</NewTabLink>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default AboutPage
