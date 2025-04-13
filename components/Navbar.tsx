import Link from 'next/link';

export default function Navbar(){
    return(
        <nav className="w-full bg-gray-800 text-white p-4">
            <ul className="flex gap-4 text-center justify-center items-center">
                <li><Link href="/">POČETNA</Link></li>
                <li><Link href="/oNama">O NAMA</Link></li>
                <li><Link href ="/usluge">USLUGE</Link></li>
                <li><Link href ="/kontakt">KONTAKT</Link></li>
            </ul>
        </nav>
    );
}