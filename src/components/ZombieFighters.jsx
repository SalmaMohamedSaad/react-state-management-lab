import Button from './Button'
const ZombieFighters = ({ zombieFighter, addButton }) => {
  // console.log(clickButton)

  return (
    <div className="main">
      <ul id={zombieFighter.name}>
        <li>
          <img src={zombieFighter.img} />
        </li>
        <li>Name: {zombieFighter.name}</li>
        <li>Price: {zombieFighter.price}</li>
        <li>Strength: {zombieFighter.strength}</li>
        <li>Agility: {zombieFighter.agility}</li>
      </ul>
      <Button
        clickButton={addButton}
        zombieFighterName={zombieFighter.name}
        className="buttonAdd"
      />
    </div>
  )
}
export default ZombieFighters
