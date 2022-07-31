import React, { useState } from 'react'
import styles from './about.module.css'

const DropDownMenu = ({ setInfo }) => {

  const [dropdown, setDropdown] = useState("1");


  const handleDropdown = (id) => {
    setDropdown(id === dropdown ? null : id)
  };

  return (
    <>
      <div className="menu-inner">
        <div className={styles.menu_heading}>
          <h5
            onClick={() => handleDropdown("1")}>
            <span>
              {"1" === dropdown ? <i className='ri-arrow-down-s-fill'></i> : <i class="ri-arrow-right-s-fill"></i>}
            </span>
            <span>personal-info</span>
          </h5>
        </div>

        {"1" === dropdown && (
          <ul className={styles.menu_list}>
            <li className={styles.menu_list__item}
              onClick={() => setInfo("bio")}>

              <i className='ri-folder-3-fill'></i>

              <span className={styles.list_link}>bio</span>
            </li>
            <li className={styles.menu_list__item}
              onClick={() => setInfo("interests")}>

              <i className='ri-folder-3-fill'></i>

              <span className={styles.list_link}>interests</span>
            </li>
            <li className={`${styles.menu_list__item} ${styles.menu_list__inner_title}`}
              onClick={() => setInfo("education")}>
              <i className='ri-folder-3-fill'></i>
              <span className={styles.list_link}>education</span>
              <ul className={styles.menu_list__inner}>
                <li>

                  <i className='ri-markdown-fill'></i>

                  <span>high-school</span>
                </li>
                <li>

                  <i className='ri-markdown-fill'></i>

                  <span>university</span>
                </li>
              </ul>
            </li>
          </ul>
        )}

        <div className={styles.menu_heading}>
          <h5
            onClick={() => handleDropdown("2")}
          >
            <span>
              {"2" === dropdown ? <i className='ri-arrow-down-s-fill'></i> : <i class="ri-arrow-right-s-fill"></i>}
            </span>
            <span>contacts</span>
          </h5>
        </div>

        {
          "2" === dropdown && (
            <ul className={styles.menu_list}>
              <li>user@gmail.com</li>
              <li>+3598246359</li>
            </ul>
          )
        }
      </div>
    </>
  )
}

export default DropDownMenu