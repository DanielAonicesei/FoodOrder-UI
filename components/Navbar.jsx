import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import {GiRotaryPhone} from "react-icons/gi";
import {GiHamburger} from "react-icons/gi";
import {FaShoppingCart} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.callButton}>
            <GiRotaryPhone size={40} color="#f9ac66" />
          </div>
          <div className={styles.texts}>
              <div className={styles.text}>ORDER NOW</div>
              <div className={styles.text}>012 345 678</div>
          </div>
        </div>
        <div className={styles.item}>
          <ul className={styles.list}>
            <li className={styles.listItem}>Homepage</li>
            <li className={styles.listItem}>Products</li>
            <li className={styles.listItem}>Menu</li>
            <GiHamburger size={40} color="#f9ac66"/>
            <li className={styles.listItem}>Events</li>
            <li className={styles.listItem}>Blog</li>
            <li className={styles.listItem}>Contact</li>
          </ul>
        </div>
        <div className={styles.item}>
          <div className={styles.cart}>
            <FaShoppingCart size={40} color="#f9ac66"/>
            <div className={styles.counter}>2</div>
          </div>
        </div>
    </div>
  )
}

export default Navbar