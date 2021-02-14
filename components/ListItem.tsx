import React from 'react'
import Link from 'next/link'
import styles from './ListItem.module.css'
import { Word } from '../interfaces'

type Props = {
  data: Word
}

const ListItem = ({ data }: Props) => (
  <Link href="/words/[id]" as={`/words/${data.id}`}>
    <a className={styles.listItemLink}>
      <div className={styles.word}>{data["láadan"]}:</div>
      <div className={styles.english}>{data["english"]}</div>
    </a>
  </Link>
)

export default ListItem
