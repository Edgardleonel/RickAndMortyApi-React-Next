import { Container } from '../../styles/styles'
import {FaAngleLeft} from 'react-icons/fa'

import Header from '../../components/Header'
import Card from '../../components/Card'
import Footer from '../../components/Footer'

import { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';


type Character = {
  id: number
  name: string
  status: string
  species: string
  gender: string
  oring: object
  location: object
  image: string
}


export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const data = await res.json()
    const characters: Character[] = data.results
    
    const paths = characters.map(res => {
      return { params: { id: (res.id).toString() } }
    })
  
    return {
      paths,
      fallback: true
    }
}
  

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}` )
  const data = await res.json()
  const character: Character[] = data
 
  return {
    props: {
      character
    }
  }
}


function Page ({ character }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter()
  const router = useRouter()

  if (isFallback && !character) {
    return <p>Loading...</p>
  }

  return (
    <Container>
      <main className='main'>
        <Header />
        <div className="back">
          <button onClick={() => router.back()}><FaAngleLeft size={16} /><span>Voltar</span></button>
        </div>
            <Card info={character} />
      </main>
      <Footer />
    </Container>
  )
}

export default Page;
