import './index.css'

const DenominationItem = props => {
  const {denominationItem, withdraw} = props
  const {value} = denominationItem

  const onClickWithdraw = () => {
    withdraw(value)
  }

  return (
    <li className="denomination-item">
      <button
        className="btn"
        type="button"
        onClick={onClickWithdraw}
        aria-label={`Withdraw ${value} rupees`}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
