import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Typography } from 'antd';

interface Props {
  level?: 1 | 2 | 3 | 4 | 5 | undefined;
  color?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

const { Title } = Typography

const small = css`
  font-size: 14px;
  @media (min-width: 425px) and (max-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 16px;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 16px;
  }
`

const medium = css`
  font-size: 16px;
  @media (min-width: 425px) and (max-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 16px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`

const large = css`
  font-size: 16px;
  @media (min-width: 425px) and (max-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 18px;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 24px;
  }
`



const StyledTitle = styled(Title)`
  color: ${(props: Props) => props.color ?? 'var(--gray900)'} !important;
  font-family: 'Kanit', sans-serif;
  font-weight: 500;
  text-align: start;
  ${(props: Props) => props.size};
`

export default (props: Props) => {
  return (
    <StyledTitle level={props.level} className={props.className} color={props.color}>{props.children}</StyledTitle>
  )
}