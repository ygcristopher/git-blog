import { ComponentProps, ReactNode } from 'react'
import { ButtonsLinksContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

type ButtonsLinksProps = ComponentProps<typeof ButtonsLinksContainer> & {
  text: string
  icon?: ReactNode
  variant?: 'iconLeft'
}

// Buttons Links

export function ButtonLinks({ text, icon, ...rest }: ButtonsLinksProps) {
  return (
    <ButtonsLinksContainer {...rest}>
      {text}
      {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
    </ButtonsLinksContainer>
  )
}
