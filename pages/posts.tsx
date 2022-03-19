import { PostCard, Categories, PostWidget, Layout } from '../components'
import { getPosts } from '../services'
import type { NextPage } from 'next'

interface Post {
  node: {
    author: { bio: string; name: string; id: string; photo: { url: string } }
    createdAt: string
    excerpt: string
    categories: { name: string; slug: string }[]
    featuredImage: { url: string }
    slug: string
    title: string
  }
}

interface HomeProps {
  posts: Post[]
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <Layout>
      <div className="container mx-auto mb-8 px-4 lg:px-10">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            {[...posts].reverse().map((post) => (
              <PostCard post={post.node} key={post.node.title} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-8 lg:sticky">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts: Post[] = (await getPosts()) || []

  return {
    props: { posts },
  }
}

export default Home
