import React from "react";
import { SidebarRow } from "./SidebarRow";
function Sidebar() {
    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                {SidebarRow.map((val, key) => {
                    return (
                        <li
                            key={key}
                            className="row"
                            onClick={() => {
                                window.location.pathname = val.link;
                            }}>
                            <div>{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Sidebar;