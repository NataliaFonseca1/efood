import { ButtonLink, ButtonContainer } from './styled'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
}
const Button = ({ type, title, to, onClick, children, variant }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink type="link" to={to as string} title={title} variant={variant}>
      {children}
    </ButtonLink>
  )
}
export default Button
