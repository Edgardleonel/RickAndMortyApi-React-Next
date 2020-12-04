import { Container, Grid } from '../../styles/styles'
import {FaAngleLeft} from 'react-icons/fa'

import Header from '../../components/Header'
import Card from '../../components/Card'
import Footer from '../../components/Footer'

import { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';


type Location = {
  id: number
  name: string
  type: string
  dimension: string
}


export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/location')
    const data = await res.json()
    const locations: Location[] = data.results
    
    const paths = locations.map(res => {
      return { params: { name: (res.name).toString() } }
    })
  
    return {
      paths,
      fallback: true
    }
}
  

export const getStaticProps: GetStaticProps = async (context) => {
  const { name } = context.params
  const res = await fetch(`https://rickandmortyapi.com/api/location?name=${name}` )
  const data = await res.json()
  const location: Location[] = data.results
 
  return {
    props: {
      location
    },
    revalidate: 10
  }
}


function Location ({ location }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter()
  const router = useRouter()

  if (isFallback && !location) {
    return <p>Loading...</p>
  }

  return (
    <Container>
      <main className='main'>
        <Header />
        <div className="back">
          <button onClick={() => router.back()}><FaAngleLeft size={16} /><span>Voltar</span></button>
        </div>
        <Grid>
          <Card info={location} />
        </Grid>
      </main>
      <Footer />
    </Container>
  )
}

export default Location;
