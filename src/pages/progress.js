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
          {/* prettier-ignore */}
          <ReactMarkdown remarkPlugins={[remarkGfm, emoji]}>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </Layout>
  )
}

export default Progress

const content = `
# :hammer: Site Under Construction


- [X] Enable GFM
- [X] Enable GFM - Image
- [X] Publish on ~~github pages~~ netlify (pathprefix not working)
- [ ] Add Dark mode support
- [X] Add Comment - implemented utterances
- [ ] Add RSS
- [ ] Add SNS Share

`
