import styles from "./styles/FormSearch.module.css"
const FormSearch = ({setSearchValue, setPage}) => {

    const handleSubmit = (event) =>{
        event.preventDefault()
        setSearchValue(event.target.inputSearch.value.toLowerCase().trim())
        event.target.inputSearch.value = ''
        setPage(1)
    }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} id="inputSearch" type="text" />
        <button className={styles.btn}>Search</button>
    </form>
  )
}
export default FormSearch