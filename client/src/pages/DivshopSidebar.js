import PropTypes from "prop-types";
import "./DivshopSidebar.css";

const DivshopSidebar = ({ className = "" }) => {
  return (
    <div className={`divshop-sidebar2 ${className}`}>
      <div className="heading-62">
        <div className="pseudo2" />
        <b className="tags">Tags</b>
      </div>
      <div className="divfacets-header2">
        <div className="selected1">0 selected</div>
        <div className="link2">
          <div className="reset2">Reset</div>
        </div>
      </div>
      <div className="item-label8">
        <div className="span-field-wrapper5">
          <div className="span-field8" />
        </div>
        <div className="spanfilter-name8">
          <div className="air-fryer8">Electrolyte</div>
        </div>
        <div className="tag-separator">(16)</div>
      </div>
    </div>
  );
};

DivshopSidebar.propTypes = {
  className: PropTypes.string,
};

export default DivshopSidebar;
