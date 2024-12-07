import Button from './Button'
const SideBar = ({ teamMember, deleteButton }) => {
  //console.log('==============>', teamMember)
  return (
    <div className="main">
      <ul id={teamMember.name}>
        <li>
          <img src={teamMember.img} />
        </li>
        <li>Name: {teamMember.name}</li>
        <li>Price: {teamMember.price}</li>
        <li>Strength: {teamMember.strength}</li>
        <li>Agility: {teamMember.agility}</li>
      </ul>
      <Button
        text="Delete"
        clickButton={deleteButton}
        zombieFighterName={teamMember.name}
        className="buttonDelete"
      />
    </div>
  )
}
export default SideBar
