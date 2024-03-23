import classes from "./CreatePostModal.module.css";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Input from "../input/Input";
import useHttps from "../../../hooks/useHttps";

function UpdatePostModal({ isOpen, setIsOpen, tags, setReaload, item }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [blur, setBlur] = useState({ name: false, description: false });
  const [errors, setErrors] = useState({
    name: undefined,
    desc: undefined,
    tags: undefined,
  });
  const [ArrTags, setArrTags] = useState([]);

  useEffect(() => {
    if (item) {
      setName(item.title);
      setDesc(item.description);
      setArrTags(item.tags);
    }
    setErrors({
      name: undefined,
      desc: undefined,
      tags: undefined,
    });
  }, [isOpen]);
  const { loading, fetchData } = useHttps();

  const handleCreat = () => {
    let ok = true;
    if (blur.name && name.trim() === "") {
      ok = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name is required!",
      }));
    }
    if (blur.description && desc.trim() === "") {
      ok = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        desc: "Description is required!",
      }));
    }
    if (ArrTags.length === 0) {
      ok = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        tags: "Choose one tag, please!",
      }));
    }
    if (ok) {
      const req = {
        url: `/posts/${item.id}`,
        config: {
          method: "PATCH",
        },
        body: {
          title: name,
          description: desc,
          tags: ArrTags,
        },
      };
      fetchData(req, (data) => {
        setReaload(true);
        setIsOpen(false);
      });
    }
  };

  const handleRadioChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setArrTags([...ArrTags, value]);
    } else {
      setArrTags(ArrTags.filter((item) => item !== value));
    }
  };
  const radio = (tag, i) => {
    return (
      <div key={i} className={classes.checkbox}>
        <label htmlFor={tag.toLowerCase()}>{tag}</label>
        <input
          type="checkbox"
          value={tag}
          name={tag.toLowerCase()}
          onChange={handleRadioChange}
          checked={tag && ArrTags.includes(tag)}
        />
      </div>
    );
  };
  return (
    <Modal isOpen={isOpen}>
      <div className={classes.backdrop} onClick={() => setIsOpen(false)}></div>
      <div className={classes.modal}>
        <div className={classes.header}>
          <h2>Update Post</h2>
          <button onClick={() => setIsOpen(false)}>
            <b>X</b>
          </button>
        </div>
        <div>
          <Input
            label="Name"
            setValue={setName}
            value={name}
            setBlur={setBlur}
            error={errors.name}
          />
          <Input
            label="Description"
            setValue={setDesc}
            value={desc}
            setBlur={setBlur}
            error={errors.desc}
          />
          <div className={classes.radio_box}>
            {tags.map((item, i) => radio(item, i))}
            {errors.tags !== "" && (
              <p className={classes.input_error}>{errors.tags}</p>
            )}
          </div>
        </div>
        <button onClick={handleCreat} className={classes.btn_create}>
          {loading ? "loading...." : "Update"}
        </button>
      </div>
    </Modal>
  );
}

export default UpdatePostModal;
