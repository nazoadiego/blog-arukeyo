import ParticlesBackground from '../components/ParticlesBackground'
import { Header } from '../components'

const Home = () => {
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
