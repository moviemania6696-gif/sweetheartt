import Link from 'next/link';
import '../styles/global.css';

export default function Layout({ children }) {
  return (
    <>
      <nav className="navbar">
        <Link href="/">Home</Link>
        <Link href="/moments">Moments</Link>
        <Link href="/boundaries">Boundaries</Link>
        <Link href="/future">Future</Link>
        <Link href="/forever">Forever</Link>
      </nav>
      <main className="page">
        {children}
      </main>
    </>
  );
}
