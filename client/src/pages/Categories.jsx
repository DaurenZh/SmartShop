import DivshopSidebar1 from "./DivshopSidebar1";
import DivshopSidebar from "./DivshopSidebar";
import CardSaleCard from "./CardSaleCard";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="shop-page">
      <div className="facet-filters-form-form">
        <DivshopSidebar1 />
        <DivshopSidebar />
      </div>
      <div className="content-container">
        <div className="divproducts-sorting">
          <div className="sort-label-container">
            <a className="sort-by">Sort by:</a>
          </div>
          <div className="default">Default</div>
          <div className="sort-dropdown">
            <div className="dropdown-icon-container">
              <img className="dropdown-icon" alt="" src="/dropdown-icon.svg" />
            </div>
          </div>
        </div>
        <div className="cards">
          <CardSaleCard
            exclude="pending_I221:5800;217:1792;217:1755"
            exclude1="pending_I221:5800;217:1792;217:1758"
          />
          <CardSaleCard
            exclude="pending_I221:5829;217:1792;217:1755"
            exclude1="pending_I221:5829;217:1792;217:1758"
            propLeft="299px"
            propTop="0px"
            propDebugCommit="unset"
            propDebugCommit1="unset"
          />
          <CardSaleCard
            exclude="pending_I221:5858;217:1792;217:1755"
            exclude1="pending_I221:5858;217:1792;217:1758"
            propLeft="598px"
            propTop="0px"
            propDebugCommit="unset"
            propDebugCommit1="unset"
          />
          <CardSaleCard
            exclude="pending_I221:5887;217:1792;217:1755"
            exclude1="pending_I221:5887;217:1792;217:1758"
            propLeft="0px"
            propTop="465px"
            propDebugCommit="unset"
            propDebugCommit1="unset"
          />
          <CardSaleCard
            exclude="pending_I221:5916;217:1792;217:1755"
            exclude1="pending_I221:5916;217:1792;217:1758"
            propLeft="299px"
            propTop="465px"
            propDebugCommit="unset"
            propDebugCommit1="unset"
          />
          <CardSaleCard
            exclude="pending_I221:5945;217:1792;217:1755"
            exclude1="pending_I221:5945;217:1792;217:1758"
            propLeft="598px"
            propTop="465px"
            propDebugCommit="unset"
            propDebugCommit1="unset"
          />
          <CardSaleCard
            exclude="pending_I221:5974;217:1792;217:1755"
            exclude1="pending_I221:5974;217:1792;217:1758"
            propLeft="0px"
            propTop="930px"
            propDebugCommit="unset"
            propDebugCommit1="unset"
          />
          <CardSaleCard
            exclude="pending_I221:6003;217:1792;217:1755"
            exclude1="pending_I221:6003;217:1792;217:1758"
            propLeft="299px"
            propTop="930px"
            propDebugCommit="unset"
            propDebugCommit1="unset"
          />
          <CardSaleCard
            exclude="pending_I221:6032;217:1792;217:1755"
            exclude1="pending_I221:6032;217:1792;217:1758"
            propLeft="598px"
            propTop="930px"
            propDebugCommit="unset"
            propDebugCommit1="unset"
          />
          <CardSaleCard
            exclude="pending_I221:6061;217:1792;217:1755"
            exclude1="pending_I221:6061;217:1792;217:1758"
            propLeft="0px"
            propTop="1395px"
            propDebugCommit="unset"
            propDebugCommit1="unset"
          />
          <CardSaleCard
            exclude="pending_I221:6090;217:1792;217:1755"
            exclude1="pending_I221:6090;217:1792;217:1758"
            propLeft="299px"
            propTop="1395px"
            propDebugCommit="unset"
            propDebugCommit1="unset"
          />
          <CardSaleCard
            exclude="pending_I221:6119;217:1792;217:1755"
            exclude1="pending_I221:6119;217:1792;217:1758"
            propLeft="598px"
            propTop="1395px"
            propDebugCommit="unset"
            propDebugCommit1="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
