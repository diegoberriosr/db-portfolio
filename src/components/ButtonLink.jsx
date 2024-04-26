const ButtonLink = ({link, containerStyle, children}) => {
  return (
    <a href={link} className={containerStyle}>
      {children}
    </a>
  )
}

export default ButtonLink
