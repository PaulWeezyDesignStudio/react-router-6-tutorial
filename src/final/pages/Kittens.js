import { Link } from 'react-router-dom';
import kittens from '../data';

const Kittens = () => {
  return (
    <section className='section'>
      <div className='products'>
        {kittens.map((kitten) => {
          return (
            <article key={kitten.id}>
              <h5>{kitten.name}</h5>
              <Link to={`/kittens/${kitten.id}`}>more info</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Kittens;
