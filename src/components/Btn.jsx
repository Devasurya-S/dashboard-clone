import React from 'react'
import clsx from 'clsx';

const Btn = ({ name, editMode, setEditMode, setLayouts }) => {
  const btnName = name.toLowerCase();
  const displayName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  const disableControl = () => {
    if (btnName === 'edit') return editMode;
    return !editMode;
  };

  const handleClick = () => {
    if (btnName === "edit") {
      setEditMode(true);
    } else if (btnName === "save") {
      const temp = localStorage.getItem("tempLayouts");
      if (temp) {
        localStorage.setItem("layouts", temp);
        setLayouts(JSON.parse(temp));  // force re-render
      }
      localStorage.removeItem("tempLayouts");
      setEditMode(false);
    } else if (btnName === "cancel") {
      localStorage.removeItem("tempLayouts");
      const original = localStorage.getItem("layouts");
      if (original) {
        setLayouts(JSON.parse(original));  // revert changes
      }
      setEditMode(false);
    } else {
      console.log("Unknown button clicked");
    }
  };

  const btnClass = clsx('btn', {
    'btn-primary': btnName === 'save',
    'btn-danger': btnName === 'cancel',
    'btn-secondary': btnName === 'edit',
  });

  return (
    <button className={btnClass} disabled={disableControl()} onClick={handleClick} name={btnName}>
      {displayName}
    </button>
  );
};

export default Btn;