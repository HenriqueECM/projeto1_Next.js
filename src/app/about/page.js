import Header from '../../components/Header';
import Link from 'next/link';

export default function about() {
    return (
        <div>
            <Header title="About" />
            <p>Está é a página sobre mim</p>
            <Link href="/">Home</Link>
        </div>
    )
}