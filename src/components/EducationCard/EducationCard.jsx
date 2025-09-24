import styles from './EducationCard.module.scss';

const Education = ({ image, title }) => {
  return (
    <div className={styles.educationBox}>
      {image && (
        <div className={styles.imageContainer}>
          <img src={image} alt={title || "Education"} className={styles.educationImage} />
        </div>
      )}
      <div className={styles.educationTitle}>
        {title}
      </div>
    </div>
  );
};

export default Education;
