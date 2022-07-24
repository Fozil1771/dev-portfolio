import React from 'react'
import Layout from '../Layout/Layout'

import styles from './home.module.css'

const Main = () => {
  return (
    <Layout>
      <div className={styles.heading}>
        <h5 className={styles.heading_sub__title}>Hi all. I am</h5>
        <h1 className={styles.heading_title}>Fozil Zayn</h1>
        <h3 className={styles.heading_role}>&gt; Front-end developer</h3>
      </div>
      <div className={styles.heading_visualize}>
        <div className={styles.heading_shape1}></div>
        <div className={styles.heading_shape2}></div>
      </div>
    </Layout>
  )
}


export default Main