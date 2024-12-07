const Button = ({
  text = 'Add',
  zombieFighterName,
  clickButton,
  className
}) => {
  return (
    <button className={className} onClick={clickButton} id={zombieFighterName}>
      {text}
    </button>
  )
}
export default Button
