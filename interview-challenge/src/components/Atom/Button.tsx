import styled from '@emotion/styled'

interface Props {
  primary?: boolean;
  link?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick: () => void;
}

const bgColor = (link: boolean, primary: boolean) => {
  if (link) return 'transparent'
  if (primary) return 'blue'
  return ''
}

const Button = styled.button( (props: Props) => ({
  padding: '8px 12px',
  borderRadius: '4px',
  border: 'none' || props.link,
  backgroundColor: bgColor(props.link ?? false, props.primary ?? false)
})
)

export default (props: Props) => {
  return (
    <Button
      primary={props.primary}
      link={props.link}
      onClick={props.onClick}
      className={props.className}
    >
      {props.children}
    </Button>
  )
}