
import styles from './Footer.module.scss';

const Footer = () => {
  const year = new Date().getFullYear(); // Pega o ano atual automaticamente

  return (
    <footer id='footer' className={styles.footer}>
      <p>© {year} Alisson Teles Fraga. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
