// src/App.jsx
import './App.css'
import { useState } from 'react'
import ZombieFighters from './components/ZombieFighters'
import SideBar from './components/SideBar'
import Message from './components/Message'

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  const [message, setMessage] = useState(team ? 'Pick some team members!' : '')
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952'
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796'
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355'
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776'
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4'
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2'
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2'
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc'
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537'
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e'
    }
  ])
  const handleTotalsInfo = (team) => {
    // console.log('Team after removing========>', team)
    setTotalStrength(
      team.reduce(
        (accumulator, currentValue) => accumulator + currentValue.strength,
        0
      )
    )
    setTotalAgility(
      team.reduce(
        (accumulator, currentValue) => accumulator + currentValue.agility,
        0
      )
    )
  }
  const handleAddFighter = (e) => {
    const buttonId = e.target.id
    const fighterExist = team.some((item) => {
      return item.name === buttonId
    })
    if (fighterExist) {
      alert('You already have this fighter in your team!')
    } else {
      zombieFighters.forEach((zombieFighter) => {
        if (money - zombieFighter.price >= 0) {
          if (zombieFighter.name === buttonId) {
            team.push(zombieFighter)
            //console.log('Team-========', team)
            setMoney(money - zombieFighter.price)
          }
          handleTotalsInfo(team)
          setMessage('')
        } else {
          setMessage("You don't have enough money to hire this fighter!")
        }
      })
    }
  }
  const handleDeleteButton = (e) => {
    //console.log('before', team.length)

    const buttonId = e.target.id
    const newTeam = team.filter((teamMember) => {
      if (teamMember.name === buttonId) {
        setMoney(money + teamMember.price)
      }

      return teamMember.name !== buttonId
    })
    setTeam(newTeam)
    // console.log('Team before deletening', newTeam)
    handleTotalsInfo(newTeam)
    newTeam.length <= 0 ? setMessage('Pick some team members!') : ''
  }

  return (
    <div>
      <Message
        money={money}
        totalStrength={totalStrength}
        totalAgility={totalAgility}
        message={message}
      />

      <div className="flex-row">
        {team.map((teamMember) => (
          <SideBar teamMember={teamMember} deleteButton={handleDeleteButton} />
        ))}
      </div>
      <div className="flex-row">
        {zombieFighters.map((zombieFighter) => (
          <ZombieFighters
            zombieFighter={zombieFighter}
            addButton={handleAddFighter}
          />
        ))}
      </div>
    </div>
  )
}

export default App
