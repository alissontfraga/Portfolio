import styles from '../Box/Box.module.scss'

const Box = ({ title, content, children, className }) => {
  return (
    <div className={`${styles.box} ${className || ''}`}>
      {/* Se tiver título, mostra */}
      {title && <div className={styles.title}>{title}</div>}

      {/* Se tiver content, mostra */}
      {content && <div className={styles.content}>{content}</div>}

      {/* Children sempre renderiza */}
      {children}
    </div>
  )
}

export default Box
