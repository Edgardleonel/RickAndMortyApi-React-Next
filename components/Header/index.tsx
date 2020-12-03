import { HeaderStyle } from './styles'
import { useRouter } from 'next/router'

function Header() {
    const router = useRouter()

    return (
        <HeaderStyle onClick={() => router.push('/')}>
            <h1><span>Teste</span> React</h1>
        </HeaderStyle>
    )
}

export default Header