import { graphql } from 'gatsby'
import React from 'react'

import PostDetail from '@/components/PostDetail'
import { useSiteMetadata } from '@/hooks/useSiteMetaData'
import { PostPageItemType } from '@/types/PostItem.types'

interface PostTemplateProps {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[]
    }
  }
  location: {
    href: string
  }
}

const PostTemplate = ({
  data: {
    allMarkdownRemark: { edges },
  },
  location: { href },
}: PostTemplateProps) => {
  const { author, favicon } = useSiteMetadata()
  return <PostDetail postPageInfo={edges[0]} href={href} author={author} favicon={favicon} />
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          tableOfContents
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
  }
`
