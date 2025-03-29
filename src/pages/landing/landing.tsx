import styles from './landing.module.scss';
import { ButtonWithIcon } from '@/shared/ui';
import { useRef, useState } from 'react';
import { ArrowIcon } from '@/icons/arrow-icon';
import { Card } from './components/card';

export const LandingPage = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const secondScreenRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    if (secondScreenRef.current) {
      secondScreenRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.landing}>
      <h1 className={styles.visuallyHidden}>Страница лендинга</h1>
      <section className={styles.landingSection}>
        <h2 className={styles.sectionTitle}>
          Интересные факты про эту страницу
        </h2>
        <p className={styles.sectionText}>В ней нет смысла</p>
        <ButtonWithIcon onClick={scrollToSection} icon={<ArrowIcon />}>
          Перейти дальше
        </ButtonWithIcon>
      </section>

      <section ref={secondScreenRef} className={styles.landingSection}>
        <h3 className={styles.sectionTitle}>Смотрите какие карточки</h3>
        <div className={styles.cardsContainer}>
          <Card title="Карточка 1" content="Пустота" />
          <Card title="Карточка 2" content="Пустота" />
        </div>
      </section>

      <section className={styles.landingSection}>
        <h4 className={styles.sectionTitle}>Интерактив?</h4>
        <input
          className={styles.alarmInput}
          type="text"
          placeholder="Напишите тут что-нибудь"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <ButtonWithIcon onClick={() => alert(inputValue)}>
          Вывести текст в alert
        </ButtonWithIcon>
      </section>
    </div>
  );
};
