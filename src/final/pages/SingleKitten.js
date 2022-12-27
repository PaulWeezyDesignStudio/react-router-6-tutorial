import { Link, useParams } from 'react-router-dom';
import kittens from '../data';
const SingleKitten = () => {
  const { kittenId } = useParams();
  const kitten = kittens.find((kitten) => kitten.id === kittenId);
  const { image, name } = kitten;
  return (
    <section className='section product'>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to='/kittens'>back to kittens</Link>
    </section>
  );
};

export default SingleKitten;
