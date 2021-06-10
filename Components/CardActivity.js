import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Card from 'react-bootstrap/Card'
import Link from 'next/link'

export default function CardActivity() {

    return (  
        <div className="row mx-0 mb-5 d-flex flex-column flex-md-row">
            <h2 className={`${styles.title} text-center mb-5`}>PARTAGEZ DES EXPÉRIENCES AUTHENTIQUES</h2>
            
            <div className="col col-md-6 col-lg-3">
                <Card className="position-relative mb-4 mx-auto shadow text-center">
                    <Card.Img className="card_image" variant="top" src="/images/image6.jpg"  alt="activité roller community app" />
                    <Link href="/sorties-evenements" className=""><i className={`${styles.infos} bi bi-plus-circle-fill fs-1 position-absolute top-50 start-50 translate-middle`}></i></Link>
                    <Card.Text className="fw-bold text-center fs-5 mt-2 mb-2">BALADEZ-VOUS EN ROLLER</Card.Text>
                </Card>
            </div>

            <div className="col col-md-6 col-lg-3">
                <Card className="position-relative mb-4 mx-auto shadow text-center">
                    <Card.Img className="card_image" variant="top" src="/images/image10bis.jpg"  alt="activité atelier community ap" />
                    <Link href="/sorties-evenements" className=""><i className={`${styles.infos} bi bi-plus-circle-fill fs-1 position-absolute top-50 start-50 translate-middle `}></i></Link>
                    <Card.Text className="fw-bold text-center fs-5 mt-2 mb-2">CONFECTIONNEZ DES CHOCOLATS</Card.Text>
                </Card>
            </div>

            <div className="col col-md-6 col-lg-3">
                <Card className="position-relative mb-4 mx-auto shadow text-center">
                    <Card.Img className="card_image" variant="top" src="/images/image4.jpg"  alt="activité gastronomie community ap" />
                    <Link href="/sorties-evenements" className=""><i className={`${styles.infos} bi bi-plus-circle-fill fs-1 position-absolute top-50 start-50 translate-middle`}></i></Link>
                    <Card.Text className="fw-bold text-center fs-5 mt-2 mb-2">DÉGUSTEZ DES VINS RÉGIONAUX</Card.Text>
                </Card>
            </div>

            <div className="col col-md-6 col-lg-3">
                <Card className="position-relative mb-4 mx-auto shadow text-center">
                    <Card.Img className="card_image" variant="top" src="/images/image7bis.jpg"  alt="activité plein air community ap" />
                    <Link href="/sorties-evenements" className=""><i className={`${styles.infos} bi bi-plus-circle-fill fs-1 position-absolute top-50 start-50 translate-middle`}></i></Link>
                    <Card.Text className="fw-bold text-center fs-5 mt-2 mb-2">VIVEZ DES SENSATIONS FORTES</Card.Text>
                </Card>
            </div>
            
        </div>
    )
}