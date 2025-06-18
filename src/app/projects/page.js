import Header from '../../components/Header'
import Link from 'next/link'

export default function Project () {
    return (
        <div>
            <Header title="Projects"/>
            <p>Esta é a página dos Projetos</p>
            <Link href="/">Home</Link>
        </div>
    )
}