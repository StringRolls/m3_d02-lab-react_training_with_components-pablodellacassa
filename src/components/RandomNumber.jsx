export default function RandomNumber(props) {
  const getRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <p className="container">
      Random value between {props.min} and {props.max} {'=>'}{' '}
      {getRandomNumber(props.max, props.min)}
    </p>
  );
}
