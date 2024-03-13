import './Sponser.css';
import prologiss from '/assets/prologis.png';
import tower from '/assets/tower.png';
import equinix from '/assets/equinix.png';
import realty from '/assets/realty.png';

const Sponser = () => {
  return (
    <section className='s-wrapper'>
      <div className='flexCenter container sponser'>
      <img src={prologiss} alt="" />
      <img src={tower} alt="" />
      <img src={equinix} alt="" />
      <img src={realty} alt="" />
      </div>
      </section>
  )
}

export default Sponser;
