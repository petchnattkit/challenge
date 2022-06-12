import styled from '@emotion/styled'

interface Props {
  type?: 'secondary' | 'success' | 'warning' | 'danger';
  color?: string;
  className?: string;
  children: React.ReactNode;
}

const StyledText = styled.p`
  font-family: 'Kanit', sans-serif;
  font-weight: 500;
  color: ${(props: Props) => props.color};
`

export default (props: Props) => {
  return (
    <StyledText type={props.type} className={props.className}>{props.children}</StyledText>
  )
}