import styles from './SearchBar.module.css'

const Searchbar = () => {
  return (
    <>
      <div id='contentSearch' className='flex w-screen h-12 bg-purple-400 justify-center items-center'>
        <div id='contentSearchBar'>
          <input id='inputSearch' className={`${styles.inputSearch} bg-purple-100 font-sans`} type="text" />
          <button id='btnSearch' className={ `${styles.btnSearchBar} w-20 bg-purple-100 font-sans` }>Search</button>
        </div>
      </div>
    </>
  )
}

export default Searchbar