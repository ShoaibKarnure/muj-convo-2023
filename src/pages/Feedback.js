import bigVector from "../assets/Vector.svg";
import FeedBackForm from "../components/FeedackForm";

function Feedback() {
  return (
    <>
      <div className='layer'>
        <div className='super'>
          <div className='mainy'>
            <FeedBackForm />
          </div>
        </div>
        <img src={bigVector} alt='' className='vector' />
      </div>
    </>
  );
}

export default Feedback;
