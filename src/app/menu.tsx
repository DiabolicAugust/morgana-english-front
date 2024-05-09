import { MenuItem } from './data';
import styles from './menu.module.css';

interface MenuProps {
  menu: MenuItem[];
  changeScreen: (index: number) => void; // Function to change the screen
}

// Correctly type the function component with MenuProps
export default function Menu({ menu, changeScreen }: MenuProps) {
  return (
    <div className={styles.menu}>
      <p className={styles.header}>Menu</p>
      <div className={styles.buttondiv}>
        {menu.map((item, index) => (
          <button
            key={index}
            className={styles.button}
            onClick={() => changeScreen(index)}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}
