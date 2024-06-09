import PropTypes from "prop-types";
import "./DivshopSidebar1.css";

const DivshopSidebar1 = ({ className = "" }) => {
  return (
    <div className={`divshop-sidebar ${className}`}>
      <div className="divshop-sidebar1">
        <div className="heading-6">
          <div className="pseudo" />
          <b className="category">Category</b>
        </div>
        <div className="divfacets-header">
          <div className="selected">0 selected</div>
          <div className="link">
            <div className="reset">Reset</div>
          </div>
        </div>
        <div className="list">
          <div className="item-label">
            <div className="span-field-wrapper">
              <div className="span-field" />
            </div>
            <div className="spanfilter-name">
              <div className="air-fryer">Air Fryer</div>
            </div>
            <div className="checkbox-separators">(1)</div>
          </div>
          <div className="item-label1">
            <div className="span-field-container">
              <div className="span-field1" />
            </div>
            <div className="spanfilter-name1">
              <div className="air-fryer1">Air Fryer</div>
            </div>
            <div className="div">(1)</div>
          </div>
          <div className="item-label2">
            <div className="span-field-frame">
              <div className="span-field2" />
            </div>
            <div className="spanfilter-name2">
              <div className="air-fryer2">Air Fryer</div>
            </div>
            <div className="div1">(1)</div>
          </div>
          <div className="item-label3">
            <div className="frame-div">
              <div className="span-field3" />
            </div>
            <div className="spanfilter-name3">
              <div className="air-fryer3">Dslr camera</div>
            </div>
            <div className="div2">(1)</div>
          </div>
          <div className="item-label4">
            <div className="span-field-wrapper1">
              <div className="span-field4" />
            </div>
            <div className="spanfilter-name4">
              <div className="air-fryer4">Earbuds</div>
            </div>
            <div className="div3">(1)</div>
          </div>
          <div className="item-label5">
            <div className="span-field-wrapper2">
              <div className="span-field5" />
            </div>
            <div className="spanfilter-name5">
              <div className="air-fryer5">Game controller</div>
            </div>
            <div className="div4">(1)</div>
          </div>
          <div className="item-label6">
            <div className="span-field-wrapper3">
              <div className="span-field6" />
            </div>
            <div className="spanfilter-name6">
              <div className="air-fryer6">Hand mixer</div>
            </div>
            <div className="div5">(1)</div>
          </div>
          <div className="item-label7">
            <div className="span-field-wrapper4">
              <div className="span-field7" />
            </div>
            <div className="spanfilter-name7">
              <div className="air-fryer7">Air Fryer</div>
            </div>
            <div className="div6">(1)</div>
          </div>
        </div>
      </div>
      <div className="heading-61">
        <div className="pseudo1" />
        <b className="price">Price</b>
      </div>
      <div className="divfacets-header1">
        <div className="the-highest-price">The highest price is $84.00</div>
        <div className="link1">
          <div className="reset1">Reset</div>
        </div>
      </div>
      <div className="price-range">
        <div className="divprice-range-group" />
        <div className="divprice-input-group">
          <div className="divprice-range-input">
            <div className="input-separators">$</div>
            <div className="price-input-fields">0</div>
            <div className="label-from">From</div>
          </div>
          <div className="price-input-suffix">
            <div className="div7">-</div>
          </div>
          <div className="divprice-range-input1">
            <div className="div8">$</div>
            <div className="div9">84</div>
            <div className="label-to">To</div>
          </div>
        </div>
      </div>
    </div>
  );
};

DivshopSidebar1.propTypes = {
  className: PropTypes.string,
};

export default DivshopSidebar1;
