import * as React from 'react'

import { Word } from '../interfaces'

type ListDetailProps = {
  item: Word
}

const ListDetail = ({ item: word }: ListDetailProps) => (
  <div>
    <h1 className="page-title">{word.laadan}</h1>
    <table className="table">
      <tbody>
        <tr>
          <th scope="row">English:</th>
          <td>{word.english}</td>
        </tr>
        {word.classification && <tr><th scope="row">Classification:</th><td>{word.classification}</td></tr> || null}
        {word.description && <tr><th scope="row">Description:</th><td>{word.description}</td></tr> || null}
        {word.notes && <tr><th scope="row">Notes:</th><td>{word.notes}</td></tr> || null}
        {word.breakdown && <tr><th scope="row">Word breakdown:</th><td>{word.breakdown}</td></tr> || null}
        {word.unofficial && <tr><th scope="row">Unofficial:</th><td>{word.unofficial}</td></tr> || null}
      </tbody>
    </table>
  </div>
)

export default ListDetail
