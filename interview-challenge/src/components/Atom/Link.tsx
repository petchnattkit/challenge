import styled from '@emotion/styled'
import { Typography } from 'antd';

interface Props {
  type?: 'secondary' | 'success' | 'warning' | 'danger';
  color?: string;
  className?: string;
  href: string;
  children: React.ReactNode;
}

const { Link } = Typography

const StyledLink = styled(Link)`
  font-family: 'Kanit', sans-serif;
  font-weight: 500;
`

export default (props: Props) => {
  return (
    <StyledLink type={props.type} className={props.className} href={props.href}>{props.children}</StyledLink>
  )
}