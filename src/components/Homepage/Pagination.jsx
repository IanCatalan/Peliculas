import styles from "./styles/Pagination.module.css";

const Pagination = ({ page, setPage, totalPages }) => {
  const perBlock = 5; // Número de páginas por bloque
  const block = Math.ceil(page / perBlock);

  const first = (block - 1) * perBlock + 1;
  const last = Math.min(first + perBlock - 1, totalPages);

  const arr = Array.from({ length: last - first + 1 }, (_, i) => first + i);

  const handlePrev = () => setPage(Math.max(page - 1, 1));
  const handleNext = () => setPage(Math.min(page + 1, totalPages));
  const handleNumber = (num) => setPage(num);
  const handlePrevBlock = () => setPage(Math.max(first - 1, 1));
  const handleNextBlock = () => setPage(Math.min(last + 1, totalPages));

  return (
    <div className={styles.pagination}>
      <div>
        <button onClick={handlePrevBlock} className={`${styles.btn} ${styles.prev}`}>
        &#10094;
        &#10094;
        </button>
        <button onClick={handlePrev} className={`${styles.btn} ${styles.prev}`}>
          &#10094;
        </button>
      </div>
      <div className={styles.page_container}>
        {arr.map((num) => (
          <button
            key={num}
            onClick={() => handleNumber(num)}
            className={`${styles.btn} ${styles.number} ${page === num ? styles.btn_active : ""}`}
          >
            {num}
          </button>
        ))}
      </div>
      <div>
        <button onClick={handleNext} className={`${styles.btn} ${styles.next}`}>
          &#10095;
        </button>
        <button onClick={handleNextBlock} className={`${styles.btn} ${styles.next}`}>
        &#10095;
        &#10095;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
