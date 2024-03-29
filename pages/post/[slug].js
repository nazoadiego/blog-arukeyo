import React from 'react'
import { useRouter } from 'next/router'

import { getPosts, getPostDetails } from '../../services'
import {
  Layout,
  PostDetail,
  Categories,
  PostWidget,
  Comments,
  CommentsForm,
  Author,
  Loader,
} from '../../components'

const PostDetails = ({ post }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <Layout>
      <div className="container mx-auto mb-8 md:px-4 lg:px-10">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post.author} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-8 lg:sticky">
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const data = (await getPostDetails(params.slug)) || []

  return {
    props: { post: data },
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  }
}
