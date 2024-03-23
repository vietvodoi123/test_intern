import ButtonViolet from "../../../ui/button/ButtonViolet";
import CreatePostModal from "../../../ui/modal/CreatePostModal";
import classes from "./MainHeader.module.css";
import React, { useState } from "react";

function MainHeader({ title, setTitle, setTag, tags, reload, setReload }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <CreatePostModal
        tags={tags}
        isOpen={openModal}
        setIsOpen={setOpenModal}
        setReload={setReload}
        reload={reload}
      />
      <div className={classes.main_header}>
        <ButtonViolet text="Add now" onClick={() => setOpenModal(true)} />
        <div className={classes.query}>
          <input
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <select onChange={(e) => setTag(e.target.value)}>
            <option value="">Tags</option>
            {tags.map((item, i) => (
              <option value={item} key={i}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default MainHeader;
