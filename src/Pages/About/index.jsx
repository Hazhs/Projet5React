import CollapseMenu from '../../Components/Collapse.jsx';
import PageBanner from '../../Components/Banner.jsx';


const collapse1 = {
    "title": "Fiabilité",
    "content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
};
const collapse2 = {
    "title": "Respect",
    "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."
};
const collapse3 = {
    "title": "Service",
    "content": "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveilance."
};
const collapse4 = {
    "title": "Sécurité",
    "content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hötes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
};

function About () {
    return (
    <div  className='about-container'>
        <PageBanner imgPath='../../assets/img/Source2.png' content=''/>
        <div className='about'>
            <CollapseMenu collapseData ={collapse1} />
            <CollapseMenu collapseData ={collapse2} />
            <CollapseMenu collapseData ={collapse3} />
            <CollapseMenu collapseData ={collapse4} />
        </div>
    </div>)
}

export default About