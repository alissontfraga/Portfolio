import styles from '../Box/Box.module.scss'

const Box = ({ title, content, children, className }) => {
  return (
    <div className={`${styles.box} ${className || ''}`}>
      {/* Se tiver título, mostra como heading */}
      {title && <h2 className={styles.title}>{title}</h2>}

      {/* Se tiver content,  */}
      {content && <div className={styles.content}>{content}</div>}


      {/* Children sempre renderiza */}
      {children}
    </div>
  )
}

export default Box
