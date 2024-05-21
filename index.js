const Button = (props) => {
  //  Write your code here.
  const { text, className } = props;
  return (
    <div className="buttons">
      <button className={className}>{text}</button>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <Button text="Like" className="like-btn" />
    <Button text="Comment" className="comment-btn" />
    <Button text="Share" className="share-btn" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
