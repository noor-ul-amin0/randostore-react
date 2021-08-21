import React from "react";

export default function Button({ action, title, ...rest }) {
  return (
    <button {...rest} onClick={action}>
      {title}
    </button>
  );
}
