import ParticlesBackground from '../components/ParticlesBackground'
import { Header } from '../components'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <ParticlesBackground />
      <div className="absolute bottom-0 right-0 left-0">
        <Header />
      </div>
    </>
  )
}

export default Home
