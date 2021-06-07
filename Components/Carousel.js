import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Carousel() {
    return (  
    <>
    <div id="myCarousel" className="carousel slide carousel-fade mb-3 mb-lg-0" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active position-relative">
                <img src="/images/image5bis.jpg" className="d-block w-100 mx-auto" alt="tourisme community app"/>
                <div className="container d-none d-lg-flex justify-content-end">
                    <div className="">
                        <h2 className="title-carousel rounded text-end text-white p-4 me-5 position-absolute top-50 end-0 translate-middle-y">DES AVENTURES QUI VOUS RESSEMBLENT PARTOUT OÙ VOUS VOUS TROUVEZ</h2>
                        <div className="mt-4 d-flex position-absolute bottom-0 end-0 translate-middle-y">
                            <Link href="/"><img src="/images/logo_apple.png" width="150" className={`${styles.social_media} me-4 mb-4`} alt="logo AppleStore"/></Link>
                            <Link href="/"><img src="/images/logo_google.png" width="150" className={`${styles.social_media} me-4 mb-4`} alt="logo GooglePlay"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item position-relative">
                <img src="/images/image1bis.jpg" className="d-block w-100 mx-auto" alt="tourisme community app"/>
                <div className="container d-none d-lg-flex justify-content-end">
                    <div className="">
                        <h2 className="title-carousel rounded text-end p-4 me-5 position-absolute top-50 end-0 translate-middle-y">LE PREMIER AGENDA DE SORTIES ET ACTIVITÉS À FAIRE PARTOUT EN FRANCE</h2>
                        <div className="mt-4 position-absolute bottom-0 end-0 translate-middle-y">
                            <Link href="/"><img src="/images/logo_apple.png" width="150" className={`${styles.social_media} me-4 mb-4`} alt="logo AppleStore"/></Link>
                            <Link href="/"><img src="/images/logo_google.png" width="150" className={`${styles.social_media} me-4 mb-4`} alt="logo GooglePlay"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item position-relative">
                <img src="/images/image3bis.jpg" className="d-block w-100 mx-auto" alt="tourisme community app"/>
                <div className="container d-none d-lg-flex justify-content-end">
                    <div className="">
                        <h2 className="title-carousel rounded text-end p-4 me-5 position-absolute top-50 end-0 translate-middle-y">PARTAGER DES AVENTURES AUTHENTIQUES AVEC NOS "CHAPERONS"</h2>
                        <div className="mt-4 d-flex position-absolute bottom-0 end-0 translate-middle-y">
                            <Link href="/"><img src="/images/logo_apple.png" width="150" className={`${styles.social_media} me-4 mb-4`} alt="logo AppleStore"/></Link>
                            <Link href="/"><img src="/images/logo_google.png" width="150" className={`${styles.social_media} me-4 mb-4`} alt="logo GooglePlay"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
    </>
    )
}




