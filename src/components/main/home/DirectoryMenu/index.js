import React, { useMemo } from "react";
import { connect } from "react-redux";
import MenuItem from "../MenuItem";
import './directory-menu.css'

const DirectoryMenu = ({ sections }) => {
  const menuItems = useMemo(
    () => sections.map((item) => <MenuItem key={item.id} {...item} />),
    [sections]
  );

  return (
    <section>
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
