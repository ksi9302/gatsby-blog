import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

const Markdown = ({ children }) => {
  return (
    // We add a 'markdown' class so we can apply custom styles
    <div className="markdown">
      // We use MDXProvider to pass custom components to our markdown // This is
      what really makes this special!
      <MDXProvider>
        // We use MDXRenderer to display our content
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export default Markdown
