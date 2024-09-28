import React from 'react'
import Icon from "../components/images/Icon.svg";

const Layout1 = () => {
  return (
    <div className="bg-black flex justify-center container">
      <div className="text-secondary flex justify-center align-middle gap-2 font-bold pt-12 mb-12">
        <img src={Icon} alt="logo" />{" "}
        <span>
          <h3>EXPENSE TRACKER</h3>
        </span>
      </div>
    </div>
  );
}

export default Layout1