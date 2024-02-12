const Person = (props) => {
  return (
    <>
      <div className="image-card">
        <div className="image-holder">
          <img src={props.img} alt="image of person" />
        </div>
        <h3>{props.name}</h3>
        <p>{props.position}</p>
        <p>
          <em>{props.quote}</em>
        </p>
      </div>
    </>
  );
};

export default Person;
