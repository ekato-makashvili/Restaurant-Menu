import React from "react";

const MenuTemplate = (props) => {
  return (
    <div>
      <p className="rounded bg-slate-900 text-white w-28 ml-72">
        {props.label}
      </p>
      <img style={{ borderRadius: "50%" }} src={props.image} alt="" />
    </div>
  );
};

export default MenuTemplate;
