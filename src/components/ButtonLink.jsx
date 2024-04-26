const ButtonLink = ({link, containerStyle, children}) => {
  return (
    <a href={link} className={containerStyle} target='_blank'>
      {children}
    </a>
  )
}

export default ButtonLink
