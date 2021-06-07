import Link from 'next/link'
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Banner() {
    const router = useRouter();

    return (  
        <div className= {`row m-0 justify-content-center ${styles.bg}`}>
            <div className="col-6 text-center mt-4 mb-3">
                <Image className="m-0"
                    src="/images/logo_white.png"
                    alt="logo Community App"
                    width={300}
                    height={80} 
                />
            </div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid justify-content-center">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center mb-2 fs-5" id="navbarNav">
                        <ul className="navbar-nav text-center">
                            <li className="nav-item me-3">
                                <Link href="/"><a className= {router.pathname == "/" ? `nav-link ${styles.active}` : "nav-link text-white"}>Accueil</a></Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link href="/sorties-evenements"><a className= {router.pathname == "/sorties-evenements" ? `nav-link ${styles.active}` : "nav-link text-white"}>Les sorties</a></Link>
                                </li>
                            <li className="nav-item me-3">
                                <Link href="/experiences"><a className= {router.pathname == "/experiences" ? `nav-link ${styles.active}` : "nav-link text-white"}>Les expériences</a></Link>
                                </li>
                            <li className="nav-item">
                                <Link href="/faq"><a className= {router.pathname == "/faq" ? `nav-link ${styles.active}` : "nav-link text-white"}>FAQ</a></Link>
                            </li>                       
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
