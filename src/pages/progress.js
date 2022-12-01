import React from 'react'
import Seo from '../components/seo'
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import emoji from 'remark-emoji'
import * as styles from './progress.module.css'

const Progress = (props) => {
  return (
    <Layout location={props?.location}>
      <Seo title="Blog" />
      <div className={styles.container}>
        <div className={styles.body}>
          <ReactMarkdown remarkPlugins={[remarkGfm, emoji]}>
            :hammer: __Site Under Construction__
          </ReactMarkdown>
        </div>
      </div>
    </Layout>
  )
}

export default Progress
