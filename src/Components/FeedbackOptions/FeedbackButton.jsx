function FeedbackButton(prop) {
  return (
    <button style={{ margin: "10px" }} type="button" onClick={prop.handle}>
      {prop.btnName}
    </button>
  );
}

export default FeedbackButton;
