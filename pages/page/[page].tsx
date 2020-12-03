import { useState } from 'react'

import { Col, Container, Grid } from '../../styles/styles'

import Header from '../../components/Header'
import Card from '../../components/Card'
import Chip from '../../components/Chip'
import Dropdown from '../../components/Dropdown'
import Ballon from '../../components/Ballon'
import Pagination from '../../components/Pagination'
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

type Info = {
  pages: number
  next: string
  prev: string
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const data = await res.json()
    const info: Info = data.info
    const allPages = info.pages

    let pages = []
    for (let i = 0; i < allPages; i++) {
     pages.push(i + 1)
    }
  
    const paths = pages.map(pg => {
      return { params: { page: pg.toString() } }
    })
  
    return {
      paths,
      fallback: true
    }
}
  

export const getStaticProps: GetStaticProps = async (context) => {
  const { page } = context.params
  const url = 'https://rickandmortyapi.com/api/character?page='
  const res = await fetch(url + page)
  const data = await res.json()
  const characters: Character[] = data.results
  const response = data.info.next
  const allPages = Number(data.info.pages) - 1
  const pageDefault = Number(response.split(url)[1]) - 1
  const pageNext = Number(response.split(url)[1]) 
  const pagePrev = Number(pageDefault - 1) 
 

  return {
    props: {
      characters,
      pageDefault,
      pageNext,
      pagePrev,
      allPages
    }
  }
}


function Page ({ characters, pageDefault, pageNext, pagePrev, allPages }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [active, setActive] = useState(false)
  const [position, setPosition] = useState()
  const { isFallback } = useRouter()
  const router = useRouter()

  const handleOpenBallon = (index) => {
    setActive(true)
    setPosition(index)
  }

  if (isFallback && !characters) {
    return <p>Loading...</p>
  }

  return (
    <Container>
      <main className='main'>
        <Header />
        <h1 className='title'>
        The Rick and Morty
        </h1>
        <p className='description'>
        Tudo sobre os personagens
        </p>

        <Grid>
          {characters.map((char, index) => (
          <Col key={index} onClick={() => router.push(`../detail/${char.id}`)}>
          <div className={active && position === index ? 'open' : 'close'}>
            <Ballon referral={char.name} />
          </div>
          <div onMouseEnter={() => handleOpenBallon(index)} onMouseLeave={() => setActive(false)}>
            <Card info={char} />
          </div>
            <Chip avatar={char.species} />
            <Dropdown labels={char} label={'localização'}/>
          </Col>
          ))}
        </Grid>
        <Pagination pageDefault={pageDefault} pageNext={pageNext} pagePrev={pagePrev} allPages={allPages} />
      </main>
      <Footer />
    </Container>
  )
}

export default Page;
