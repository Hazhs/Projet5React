import PageBanner from '../../Components/Banner.jsx';
import Card from '../../Components/Card.jsx';
import data from '../../data.json';

export default function Gallery() {
  const dataCards = data.map((data) => (
    <Card key={data.id} cardElement={data} />
  ));

  return (
    <div className="home-container">
      <PageBanner
        content="Chez vous, partout et ailleurs"
        imgPath="../../assets/img/Source1.png"
      />
      <div className="gallery">{dataCards}</div>
    </div>
  );
}
