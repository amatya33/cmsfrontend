const Button = (props) => {
  const {title, color} = props;
  console.log(props)
  return (
    <button style={{height:"50px", width:"100px", backgroundColor:color}}> {title}</button>
  )
}

export default Button