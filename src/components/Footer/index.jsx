/* eslint-disable jsx-a11y/control-has-associated-label */
import * as React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <h1>
        THEME
      </h1>
      <div className="btn-container">
        <button type="button" className="btn purple-btn" />
        <button type="button" className="btn blue-btn" />
        <button type="button" className="btn gray-btn" />
      </div>
    </div>
  );
}
