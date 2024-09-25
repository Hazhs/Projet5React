import PageBanner from '../../Components/PageBanner.jsx';
import Card from '../../Components/Card.jsx';
import data from '../../data.json';

//Générer la PageBanner et la gallerie via une boucle sur le dossier json en utilisant
//le composant Card, il me faudra aussi un addEventListener renvoyant vers un path /location/{id}
export default function Gallery() {
  const dataCards = data.map((data) =>
  <Card cardElement={data}/>);

  return (
    <div className = 'main-container'>
      <PageBanner content = 'Chez vous, partout et ailleurs' imgPath = '../../assets/img/Source1.png' />
      <div className = 'gallery'>
        {dataCards}
      </div>
    </div>
  )
}