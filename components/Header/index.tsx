import { HeaderStyle } from './styles'
import { useRouter } from 'next/router'
import Head from 'next/head'

function Header() {
    const router = useRouter()

    return (
        <>
        <Head>
            <title>Rick and Morty</title>
        </Head>
        <HeaderStyle onClick={() => router.push('/')}>
            <h1><span>Teste</span> React</h1>
        </HeaderStyle>
        </>
    )
}

export default Header