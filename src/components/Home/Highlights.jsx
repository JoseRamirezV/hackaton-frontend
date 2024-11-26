import CardView from '../CardView/CardView'
import styles from './Highlights.module.css'

const Highlights = () => {
  return (
    <>
        <div id='contentHighlight' className={`${styles.contentHighlight} w-screen bg-purple-400 h-56 flex justify-center items-center`}>
            <div id='highlight' className='w-full h-4/6 flex justify-center items-center'>
                <CardView />
            </div>
        </div>
    </>
  )
}

export default Highlights