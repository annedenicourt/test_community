import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';
import Banner from '../Components/Banner'
import CardActivity from '../Components/CardActivity'
import Footer from '../Components/Footer'
import styles from '../styles/Faq.module.css'
import Card from 'react-bootstrap/Card'

export default function FAQ() {
    
    const [filter, setFilter] = useState(true)

    function onChangeFilter() {
        setFilter(!filter)
        console.log(filter)
    }

  return (
    <div>
      <Head>
        <title>FAQ - Community App
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Banner/>
        <div className="row mx-0 mt-5 mb-5 justify-content-center">
        <h2 className={`${styles.title} text-center mb-3`}>NOUS RÉPONDONS À VOS QUESTIONS</h2>
            <div className="col-8 mt-5 mb-5">
                <div className="accordion accordion-flush" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            COMMENT TÉLÉCHARGER L'APPLI COMMUNITY ?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body d-flex flex-column ">
                                Pour télécharger Community, rendez-vous sur votre app store
                                <div className="mt-3">
                                    <Link href="/"><img src="/images/logo_apple.png" width="150" className={`${styles.social_media} me-2 mb-4`} alt="logo Google"/></Link>
                                    <Link href="/"><img src="/images/logo_google.png" width="150" className={`${styles.social_media} me-2 mb-4`} alt="logo Apple"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            LES ÉVÉNEMENTS SONT-ILS RÉACTUALISÉS RÉGULIÈREMENT ?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Community met à jour l’agenda de sortie dans vos villes tous les jours
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            COMMENT SÉLECTIONNER UNIQUEMENT LES ÉVÉNEMENTS SUCEPTIBLES DE M'INTÉRESSER ?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Il vous suffit d’affiner votre rechercher en sélectionnant les catégories qui vous intéressent (sport, art, soirées etc…) et nous les sélectionnons pour vous.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading4">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                            COMMENT ÊTRE SÛR/E QUE LES EXPÉRIENCES NE SONT PAS DES ARNAQUES ?
                            </button>
                        </h2>
                        <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                A la confirmation de votre commande, un mail vous sera envoyé avec tous les détails de la réservation 
                                (une fois que le chaperon aura accepté votre réservation).
                                Vous pourrez rentrer en contact par mail ou téléphone avec votre chaperon.
                                Le montant de l’expérience est uniquement bloqué jusqu’à la date de celle-ci, et prélevé après votre expérience. 
                                Si votre expérience a été annulé par votre chaperon, le montant vous sera re crédité sur votre compte. 
                                Community dispose par ailleurs d’une équipe dédiée qui vérifie au quotidien les chaperons avant de les valider sur la plateforme.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading5">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                            EST-CE QUE L'APPLICATION MOBILE EST SÉCURISÉE ?
                            </button>
                        </h2>
                        <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Nous utilisons les toutes dernières technologies d’encryption de données, et travaillons en partenariat 
                                avec le spécaliste mondiale du paiement en ligne: Stripe.
                                Vos données bancaires sont conservées sur leurs serveurs, et sont donc en toute sécurité. 
                                Vous pouvez nous (et leur) faire confiance !
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading6">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                            ET SI JE VEUX ANNULER UNE EXPÉRIENCE ?
                            </button>
                        </h2>
                        <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Vous disposez du droit d’annuler gratuitement votre expérience jusque 24h à l’avance au minimum. 
                                Au-delà, vous ne pourrez être remboursé du montant.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading7">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                            COMMENT SAVOIR SI J'AI DES AMIS QUI PARTICIPENT AUX ÉVÉNEMENTS ?
                            </button>
                        </h2>
                        <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                En cliquant sur « cela m’intéresse », vous figurerez comme « interessé à cet évènement » 
                                aux yeux des autres utilisateurs. Vos amis pourront voir que vous y participez, 
                                comme vous pourrez voir vos amis participer à des évènements.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading8">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                            JE SUIS CURIEUX/SE DE SAVOIR CE QU'IL SE PASSE AILLEURS QUE DANS MA VILLE
                            </button>
                        </h2>
                        <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Il vous suffit de taper le nom de la ville pour laquelle vous êtes intéressés de voir les évènements qui se passent 
                                ou les expériences à réserver dans la barre de recherche de notre application
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <CardActivity />
        <Footer />
      </main>

      
    </div>
  )
}
