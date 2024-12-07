const Message = ({ money, totalStrength, totalAgility, message }) => {
  return (
    <div>
      <h1>Zombie Fighters</h1>
      <h3>Amount of money Available: {money}</h3>
      <h3> Total Team Strength: {totalStrength}</h3>
      <h3> Total Team Agility: {totalAgility}</h3>
      <h5> {message}</h5>
    </div>
  )
}
export default Message
