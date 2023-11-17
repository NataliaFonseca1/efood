import { TagContainer } from './styles'

export type Props = {
  children: React.ReactNode
}
const Tag = ({ children }: Props) => <TagContainer>{children}</TagContainer>
export default Tag
