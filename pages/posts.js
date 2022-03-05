import { PostCard, Categories, PostWidget, Layout } from '../components'
import { getPosts } from '../services'

const Home = ({ posts }) => {
  // We want chronological order AND avoid mutating the original array
  const reversePosts = [...posts].reverse()

  return (
    <Layout>
      <div className="container mx-auto mb-8 px-4 lg:px-10">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            {reversePosts.map((post) => (
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
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}

export default Home
