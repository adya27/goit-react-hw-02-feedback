import FeedbackButton from "./FeedbackButton";

function FeedbackOption({ handleGood, handleNeutral, handleBad }) {
  return (
    <section>
      <FeedbackButton btnName="Good" handle={handleGood} />
      <FeedbackButton btnName="Neutral" handle={handleNeutral} />
      <FeedbackButton btnName="Bad" handle={handleBad} />
    </section>
  );
}

export default FeedbackOption;
