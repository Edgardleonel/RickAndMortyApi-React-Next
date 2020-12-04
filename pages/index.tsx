import { useState } from 'react'

import { Col, Container, Grid } from '../styles/styles'

import Header from '../components/Header'
import Card from '../components/Card'
import Chip from '../components/Chip'
import Dropdown from '../components/Dropdown'
import Ballon from '../components/Ballon'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'

import { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

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


export const getStaticProps = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const data = await res.json()
  const characters: Character[] = data.results

  const allPages = Number(data.info.pages) - 1
  const pageDefault = 1
  const pageNext = 2 
  const pagePrev = 0

  return {
    props: {
      characters,
      allPages,
      pageDefault,
      pageNext,
      pagePrev
    },
    revalidate: 10
  }
}


function Home ({ characters, pagePrev, pageNext,pageDefault, allPages }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [active, setActive] = useState(false)
  const [position, setPosition] = useState()
  const router = useRouter()

  const handleOpenBallon = (index) => {
    setActive(true)
    setPosition(index)
  }

  if(!characters) {
    return (<div>Loading...</div>)
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
          <Col key={index} onClick={() => router.push(`/detail/${char.id}`)}>
          <div className={active && position === index ? 'open' : 'close'}>
            <Ballon referral={char.name} />
          </div>
          <div onMouseEnter={() => handleOpenBallon(index)} onMouseLeave={() => setActive(false)}>
            <Card info={char} />
          </div>
            <Chip avatar={char.species} />
            <Dropdown labels={char} label={'Localização'}/>
          </Col>
          ))}
        </Grid>
        <Pagination pageDefault={pageDefault} pageNext={pageNext} pagePrev={pagePrev} allPages={allPages} />
      </main>
      <Footer />
    </Container>
  )
}

export default Home;
