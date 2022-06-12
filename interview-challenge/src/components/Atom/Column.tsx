import styled from '@emotion/styled'

const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
type col = typeof cols[number] | 'auto' | undefined;

interface Props {
  col?: col;
  className?: string;
  children: React.ReactNode;
}

const StyledColumn = styled.div`
  max-width: ${(props: Props) => { return props.col === 'auto' ? '100%' : (props.col ?? 1) * (100 / 12)+'%' }};
  flex: 0 0 ${(props: Props) => { return props.col === 'auto' ? props.col : (props.col ?? 1) * (100 / 12) - 6 +'%' }};
  width: ${(props: Props) => { return props.col === 'auto' ? 'auto' : '100%' }};
  padding: 8px;
`

export default (props: Props) => {
  return (
    <StyledColumn
      className={props.className}
      col={props.col}
    >
      {props.children}
    </StyledColumn>
  )
}