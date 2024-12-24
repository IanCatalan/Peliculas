import FormSearch from "./FormSearch"
import SelectSection from "./SelectSection"
import styles from './styles/FormHome.module.css'

const FormHome = ({setSelectValue, setSearchValue, setPage}) => {
  return (
    <div className={styles.container}>
        <SelectSection
        setSelectValue={setSelectValue}
        setSearchValue={setSearchValue}
        setPage={setPage}
        />
        <FormSearch 
        setSearchValue={setSearchValue}
        setPage={setPage}
        />
    </div>
  )
}
export default FormHome