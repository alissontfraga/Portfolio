
import styles from './Placeholder.module.scss'

const Placeholder = ({ title, Icon, className, iconWrapperClassName, children }) => {
  return (
    <div className={`${styles.Placeholder} ${className || ""}`}>
      <div className={`${styles.iconWrapper} ${iconWrapperClassName || ""}`}>
        {Icon && <Icon className={styles.Icon} />}
        {children} 
      </div>
      <p className={styles.Title}>{title}</p>
    </div>
  );
};

export default Placeholder;
