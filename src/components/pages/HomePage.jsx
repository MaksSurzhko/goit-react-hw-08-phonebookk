import hcss from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={hcss.cont}>
     <div className={hcss.box}>
        {<h1 className={hcss.title} >Welcome in Phonebook!!</h1>}
        </div>
    </div>
    )
};

export default HomePage;