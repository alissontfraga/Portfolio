import styles from './SkillsPlaceholder.module.scss'


const SkillsPlaceholder = ({ title, Icon }) => {
  return (
    <div className={styles.skillPlaceholder}>
      <div className={styles.iconWrapper}>
        {Icon && <Icon className={styles.skillIcon} />}
      </div>
      <p className={styles.skillTitle}>{title}</p>
    </div>
  );
};

export default SkillsPlaceholder;
