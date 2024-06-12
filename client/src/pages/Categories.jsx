import DivshopSidebar1 from "./DivshopSidebar1";
import DivshopSidebar from "./DivshopSidebar";
import categ from './../images/Catergory card.svg'
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
        <img
            loading="lazy"
            src={categ}
            className="canopolyhan"
            alt="cat"
          />
          <img
            loading="lazy"
            src={categ}
            className="canopolyhan"
            alt="cat"
          />
          <img
            loading="lazy"
            src={categ}
            className="canopolyhan"
            alt="cat"
          />
          <img
            loading="lazy"
            src={categ}
            className="canopolyhan"
            alt="cat"
          />
          <img
            loading="lazy"
            src={categ}
            className="canopolyhan"
            alt="cat"
          />
          <img
            loading="lazy"
            src={categ}
            className="canopolyhan"
            alt="cat"
          />
          <img
            loading="lazy"
            src={categ}
            className="canopolyhan"
            alt="cat"
          />
          <img
            loading="lazy"
            src={categ}
            className="canopolyhan"
            alt="cat"
          />
          <img
            loading="lazy"
            src={categ}
            className="canopolyhan"
            alt="cat"
          />
          <img
            loading="lazy"
            src={categ}
            className="canopolyhan"
            alt="cat"
          />
          <img
            loading="lazy"
            src={categ}
            className="canopolyhan"
            alt="cat"
          />
          <img
            loading="lazy"
            src={categ}
            className="canopolyhan"
            alt="cat"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
