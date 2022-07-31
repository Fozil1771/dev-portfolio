import React, { useState } from "react";


import { ContentWrapper, MenuWrapper } from "../Reusable/Styles";
import styles from "./about.module.css";
import DropDownMenu from "./DropDownMenu";
import EditorBoard from "./Editor";

const AboutContent = () => {
  const [info, setInfo] = useState('bio');

  return (
    <ContentWrapper>
      <MenuWrapper>
        <DropDownMenu setInfo={setInfo} />
      </MenuWrapper>
      <div className={styles.content}>
        <div className={styles.conten_info}>
          <div className={styles.content_nav}>

          </div>
          <div className={styles.content_body}>
            <EditorBoard />
          </div>
        </div>
        <div className={styles.content_showcase}>
          <div className={styles.content_nav}>

          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default AboutContent;
