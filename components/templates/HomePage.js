import Attributes from "../modules/Attributes"
import Banner from "../modules/Banner"
import Companies from "../modules/Companies"
import Definition from "../modules/Definition"
import Guide from "../modules/Guide"
import Instructions from "../modules/Instructions"
import Restrictions from "../modules/Restrictions"
import styles from "./HomePage.module.css"

function HomePage() {
  return (
    <div className={styles.container}>
        <Banner/>
        <Attributes/>
        <Definition/>
        <Companies/>
        <Instructions/>
        <Guide/>
        <Restrictions/>
    </div>
  )
}

export default HomePage