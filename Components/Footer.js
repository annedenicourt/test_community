import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'

export default function Footer() {

    return (  <>
        <div className= {`row m-0 justify-content-center d-flex flex-column flex-md-row ${styles.bg_footer}`}>
            <div className="col col-lg-6 text-center mt-4 mb-3 p-0">
                <h4 className="text-white mb-4">TÉLÉCHARGEZ COMMUNITY</h4>
                <div>
                    <Link href="/"><img src="/images/logo_apple.png" width="150" className={`${styles.social_media} me-2 mb-4`} alt="logo Google"/></Link>
                    <Link href="/"><img src="/images/logo_google.png" width="150" className={`${styles.social_media} me-2 mb-4`} alt="logo Apple"/></Link>
                </div>
            </div>
            <div className="col col-lg-6 text-center mt-4 mb-3 p-0">
                <h5 className="text-white mb-3 ">RETROUVEZ-NOUS SUR LES RÉSEAUX SOCIAUX</h5>
                <div className="text-white">
                    <Link href="/"><i className={`${styles.social_media} bi bi-facebook fs-1 me-4`}></i></Link>
                    <Link href="/"><i className={`${styles.social_media} bi bi-instagram fs-1 me-4`}></i></Link>
                    <Link href="/"><i className={`${styles.social_media} bi bi-twitter fs-1 me-4`}></i></Link>
                </div>
            </div>
        </div>
        <div className="text-center mt-2">COPYRIGHT ® COMMUNITY APP.</div>
    </>
    )
}
