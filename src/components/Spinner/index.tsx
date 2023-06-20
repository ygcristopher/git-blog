import { SpinnerContainer } from './styles'

export function Spinner() {
  return (
    <SpinnerContainer>
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </SpinnerContainer>
  )
}
