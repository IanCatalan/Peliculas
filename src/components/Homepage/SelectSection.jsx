import styles from './styles/SelectSection.module.css';

const SelectSection = ({ setSelectValue, setSearchValue, setPage }) => {
  const handleChange = (event) => {
    setSelectValue(event.target.value);
    setSearchValue(''); 
    setPage(1);
  };

  return (
    <select className={styles.select} onChange={handleChange} defaultValue="popular">
      <option className={styles.option} value="popular">Popular</option>
      <option className={styles.option} value="top_rated">Más valorados</option>
      <option className={styles.option} value="upcoming">Próximamente</option>
    </select>
  );
};

export default SelectSection;
