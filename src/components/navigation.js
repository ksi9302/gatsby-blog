import React from 'react'
import { Link } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import emoji from 'remark-emoji'
import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <img
        className={styles.logoImg}
        src="/images/profile-trimmed.jpg"
        alt="logo"
      />
      <span className={styles.navigationItem}>@ksi9302</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Blog
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/progress/" activeClassName="active">
          <ReactMarkdown remarkPlugins={[remarkGfm, emoji]}>
            :hammer:
          </ReactMarkdown>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
