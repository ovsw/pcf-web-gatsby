import * as React from "react"
import Icon119 from '../../images/svg/icon-119.inline.svg'

const FormAppoint = () => {
  const handleSubmit = event => {
    event.preventDefault()
  }
  return (
    <form onClick={handleSubmit}>
      <input type="email" placeholder="ihidago@ujufidnan.gov" />
      <button className="d-flex justify-content-center align-items-center">
        {/* <img src="images/icon/119.svg" alt="icon" /> */}
        <Icon119 />
      </button>
    </form>
  )
}

export default FormAppoint
