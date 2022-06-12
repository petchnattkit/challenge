import { Card } from 'antd';
import styled from '@emotion/styled'

interface Props {
  className?: string;
  children: React.ReactNode;
}

const StyledCard = styled.div`
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 8px 22px -6px rgba(19, 55, 109, 0.1), 0px 10px 40px -4px rgba(19, 55, 109, 0.08);
`

export default (props: Props) => {
  return (
    <StyledCard className={props.className}>
      { props.children }
    </StyledCard>
  )
}