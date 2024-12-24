import styles from  './styles/CastCard.module.css'
const CastCard = ({ person }) => {

  const pathImage= person.profile_path
  ? `https://image.tmdb.org/t/p/original${person.profile_path}`
  : '/user_photo.png' 
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <img
        className={styles.image}
        
          src={pathImage}
          alt={`profile photo ${person.original_name}`}
        />
      </header>
      <section className={styles.body}>
        <h4 className={styles.name}>{person.original_name}</h4>
        <div className={styles.alias}>{person.character}</div>
      </section>
    </article>
  );
};
export default CastCard;
