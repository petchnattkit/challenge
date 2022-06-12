import styled from '@emotion/styled'

interface Props {
  justify?: 'center' | 'start' | 'end';
  items?: 'center' | 'start' | 'end' | 'stretch';
  flex?: boolean;
  children: React.ReactNode
}

const Container = styled.div`
  display: ${(props: Props) => props.flex ? 'flex': 'block' };
  align-items: ${(props: Props) => props.items ?? 'start' };
  justify-content: ${(props: Props) => props.justify ?? 'start' };
  padding: 72px 144px;
`

export default (props: Props) => {
  return (
    <Container flex={props.flex} items={props.items} justify={props.justify}>{ props.children }</Container>
  )
}