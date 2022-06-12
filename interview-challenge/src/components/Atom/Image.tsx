interface Props {
  src: string
  width?: string
  height?: string
  className?: string
  alt?: string
}

export default (props: Props) => {
  return (
    <img
      loading="lazy"
      className={props.className}
      alt={props.alt ?? 'images'}
      src={props.src}
      width={props.width ?? '100%'}
      height={props.height ?? '100%'}
    />
  )
}