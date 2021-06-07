import styles from '../styles/Home.module.css'

export default function Contact() {
    
    return (  
        <div className="row mx-0 mt-5 mb-5">
            <h2 className={`${styles.title} text-center mb-5`}>CONTACTEZ-NOUS</h2>
            <form className="px-5">
            <div className="row mb-4">
                <div className="col">
                    <label className="mb-2" htmlFor="name">Votre nom *</label>
                    <input type="text" className="form-control" id="name" placeholder="Votre nom" required/>
                </div>
                <div className="col">
                    <label className="mb-2" htmlFor="email">Votre adresse mail *</label>
                    <input type="email" className="form-control" id="email" placeholder="nom@exemple.com" required/>
                </div>
            </div>
                <div className="form-group mb-4">
                    <label className="mb-2" htmlFor="exampleFormControlInput1">Objet *</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" required/>
                </div>
                <div className="form-group mb-4">
                    <label className="mb-2" htmlFor="message">Votre message</label>
                    <textarea className="form-control" id="message" rows="3"></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-outline-dark mb-3">Envoyer</button>
                    <div> * Champs obligatoires</div>
                </div>
                
            </form>  
        </div>
    )
}