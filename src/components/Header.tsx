import React from 'react';
import primavera from '../assets/icons/primavera.png';
import verao from '../assets/icons/verao.png';
import outono from '../assets/icons/outono.png';
import inverno from '../assets/icons/inverno.png';

function Header() {
  return (
    <header className="flex ">
      <div className="bg--600 flex justify-between space-x-8">
        <div className="w-10 h-10">
          <img src={primavera} alt="pimavera" />
        </div>
        <div className="w-10 h-10">
          <img src={verao} alt="pimavera" />
        </div>
        <div className="w-10 h-10">
          <img src={outono} alt="pimavera" />
        </div>
        <div className="w-10 h-10">
          <img src={inverno} alt="pimavera" />
        </div>
      </div>
    </header>
  );
}
export default Header;
