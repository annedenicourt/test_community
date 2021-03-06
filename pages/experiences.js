import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Banner from '../Components/Banner'
import CardActivity from '../Components/CardActivity'
import Footer from '../Components/Footer'
import styles from '../styles/Home.module.css'

export default function Experiences({}) {

  return (
    <div>
      <Head>
        <title>Vivez des expériences inoubliables - Community App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Banner />
        <div className="row mx-0 mb-5 mb-lg-2 align-items-center d-flex flex-column flex-lg-row">
            <div className="col col-lg-8 text-center">
                <h2 className={`${styles.title} mt-5 mt-lg-0 mb-3 mb-lg-5`}>QUI SONT LES CHAPERONS ? </h2>
                <p className="px-5"> Des locaux qui proposent toutes sortes d’expériences inédites et insolites pour tous les goûts, géolocalisés autour de vous : 
                    <br />- Traversée de la Garonne en bateau avec dégustation de vin exceptionnels
                    <br />- Atelier de confection de bijoux en cuir
                    <br />- Fabrication de sa propre bière
                    <br />- Vivre une aventure hors du commun en survolant les gorges du Verdon en ULM
                    <br />Et d’autres activités qui vous font rêver ! Insolites, extraordinaires, et qui vous ressemblent !</p>
            </div>
            <div className="col-8 col-lg-4 p-lg-5">
                <Image className=""
                src="/images/image17.jpeg"
                alt="boussole"
                width={300}
                height={300} 
                layout="responsive"
                />
            </div>
        </div>
        <div className="row mx-0 mb-5 mb-lg-2 align-items-center d-flex flex-column flex-lg-row">
             <div className="col col-lg-6 p-lg-5 d-none d-lg-block">
                <Image className=""
                src="/images/image2bis.png"
                alt="boussole"
                width={300}
                height={300} 
                layout="responsive"
                />
            </div>
            <div className="col col-lg-6 text-center">
                <h2 className={`${styles.title} mb-3 mb-lg-5`}>COMMENT CELA FONCTIONNE ? </h2>
                <p className="px-5"> Pour commencer, téléchargez l’application Community sur votre App Store et ouvrez l’application depuis votre Smartphone.
                Une fois ouverte, entrez la ville dans laquelle vous souhaitez découvrir des expériences. Nous couvrons déja Bordeaux, Paris et ajoutons des expériences dans de nouvelles villes toutes les semaines.
                Il vous suffit ensuite de scroller et de choisir l’expérience à laquelle vous souhaitez participer.
                Vous pouvez regarder la liste déroulante des expériences, mais aussi les géolocaliser pour voir la plus proche de vous en cliquant sur « map »
                </p>
                <div className="mt-5">
                    <Link href="/"><img src="/images/logo_apple.png" width="150" className={`${styles.social_media} me-2 mb-4`} alt="logo Google"/></Link>
                    <Link href="/"><img src="/images/logo_google.png" width="150" className={`${styles.social_media} me-2 mb-4`} alt="logo Apple"/></Link>
                </div>
            </div>   
        </div>
        <div className="row mx-0 mb-5 mb-lg-2 align-items-center d-flex flex-column flex-lg-row">
            <div className="col col-lg-6 text-center">
                <h2 className={`${styles.title} mb-3 mb-lg-5`}>CLIQUEZ, RÉSERVEZ, C'EST FAIT !</h2>
                <p className="px-5"> Choisissez la date qui vous convient le mieux, et réservez votre expérience en direct !
                Un e-mail vous est envoyé avec tous les détails de votre rendez-vous : lieux, téléphone du chaperon, confirmation de votre paiement.
                Votre place est bookée !
                Vous pouvez aussi retrouver toutes vos expériences réservées dans votre profil.</p>
                <div className="mt-5">
                    <Link href="/"><img src="/images/logo_apple.png" width="150" className={`${styles.social_media} me-2 mb-4`} alt="logo Google"/></Link>
                    <Link href="/"><img src="/images/logo_google.png" width="150" className={`${styles.social_media} me-2 mb-4`} alt="logo Apple"/></Link>
                </div>            
            </div>
            <div className="col col-lg-6 p-lg-5">
                <Image className=""
                src="/images/image16.png"
                alt="boussole"
                width={300}
                height={300} 
                layout="responsive"
                />
            </div>
        </div>
        <CardActivity />
        <Link href="/experiences"><div className="fixed-bottom text-end me-2"><i className="bi bi-arrow-up-square-fill fs-3"></i></div></Link>
        <Footer />
      </main>
    </div>
  )
}

/*export async function getStaticProps() {
  const products = await fetch("https://607d8e2b184368001769df4f.mockapi.io/api/my-store/products")
    .then (res => res.json())
  return {
    props: {
      products
    },
  }
}*/
