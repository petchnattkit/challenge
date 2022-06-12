import styled from '@emotion/styled'

interface Props {
  top?: number,
  bottom?: number,
  left?: number,
  right?: number
}

const StyledSpacer = styled.div`
  margin: ${(props: Props) => props.top ?? 0}px ${(props: Props) => props.right ?? 0}px ${(props: Props) => props.bottom ?? 0}px ${(props: Props) => props.left ?? 0}px;
`

export default (props: Props) => {
  return (
    <StyledSpacer
      left={props.left}
      right={props.right}
      top={props.top}
      bottom={props.bottom}
    />
  )
}