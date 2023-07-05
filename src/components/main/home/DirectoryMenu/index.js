import React, { useEffect, useMemo, useRef } from "react";
import { connect } from "react-redux";
import MenuItem from "../MenuItem";
import './directory-menu.css'
import { useLocation } from "react-router-dom";

const DirectoryMenu = ({ sections }) => {
  const menuItems = useMemo(
    () => sections.map((item) => <MenuItem key={item.id} {...item} />),
    [sections]
  );

  const location = useLocation()
  const categoriesSectionRef = useRef()

  useEffect(()=>{
    if (location.hash === '#categories') {
      categoriesSectionRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }, [location])

  return (
    <section id="categories" ref={categoriesSectionRef}>
      <div className="container">
        <h3 className="section_title">Catergories</h3>
        <div className="directory_menu">{menuItems}</div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  sections: state.directory.sections,
});

export default connect(mapStateToProps)(DirectoryMenu);
