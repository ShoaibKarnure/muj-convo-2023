import bigVector from "../assets/big-wave.png";
import FeedBackForm from "../components/FeedackForm";
import "../style/feedback.css";

function App() {
  return (
    <>
      <div className='feedback-layer'>
        <div className='feedback-super'>
          <div className='feedback-mainy'>
            <FeedBackForm />
          </div>
        </div>
        <img src={bigVector} alt='' className='vector' />
      </div>
    </>
  );
}

export default App;
