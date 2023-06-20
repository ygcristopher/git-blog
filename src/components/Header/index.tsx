import { HeaderContainer } from './styles'
import Logo from '../../assets/Logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="logo.png" />
    </HeaderContainer>
  )
}
