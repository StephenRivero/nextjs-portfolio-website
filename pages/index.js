import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Stephen Rivero | Front-End Developer</title>
        <meta name="Stephen Rivero | Front-End Developer" content="Stephen Rivero | Front-End Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </div>
  )
}
