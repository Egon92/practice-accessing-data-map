function Image(props) {
  console.log(props);
  return <img src={props.image.imgUrl} />;
}

export default Image;
