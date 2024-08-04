import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

const denominationList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  withdraw = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {balance} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <div className="name-container">
            <p className="icon">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="bal-container">
            <p>Your Balance</p>
            <p className="balance">{balance}</p>
          </div>
          <p className="hdng">Withdraw</p>
          <p className="para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="btn-container">
            {denominationList.map(eachRupee => (
              <DenominationItem
                key={eachRupee.id}
                denominationItem={eachRupee}
                withdraw={() => this.withdraw(eachRupee.value)}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
