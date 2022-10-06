import type { NextPage } from 'next'
import { ParetoContainer } from '../components/container'

const Home: NextPage = () => {
  return (
    <ParetoContainer>
      <div className='w-full h-full flex justify-center items-center text-9xl font-bold'>
        Welcome
      </div>
    </ParetoContainer>
  )
}

export default Home
