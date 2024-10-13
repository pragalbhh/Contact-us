import styles from "./navigation.module.css"

const Navigation = () => {
  return (
    <nav className={`${styles.navigation}container`}>
        <div className="logo">
            <img src="/images/contact Appt.png" alt="logo" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
    </nav>

  )
}

export default Navigation
