import * as React from 'react'
import ListItem from './ListItem'
import { Word } from '../interfaces'

type Props = {
  items: Word[]
}

const List = ({ items }: Props) => (
  <ul className="list-group">
    {items.map((item, index) => (
      <li key={index} className="list-group-item">
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
