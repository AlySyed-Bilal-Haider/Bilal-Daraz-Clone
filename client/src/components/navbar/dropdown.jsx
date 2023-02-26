import React from "react";
import "./dropdown.css";
import { NavLink } from "react-router-dom";
// import logo from "../../assets/daraz.png";

export default function Dropdown1() {
  return (
    <div>
      <nav className="menu">
        <ul>
          <li>
            <ul>
              <li>
                <NavLink to="/categoryPage/cleaninggloves">
                  Cleaning Gloves
                </NavLink>
              </li>
              <li>
                <NavLink to="/categoryPage/alaramclocks">
                  Health and beauty
                </NavLink>
              </li>
              <li>
                <NavLink to="/product/634507f58000a613bc142a62">
                  Mens Fashion
                </NavLink>
              </li>
              <li>
                <NavLink to="/categoryPage/kidswears">Baby and Toys</NavLink>
                <ul className="second">
                  <li>
                    <NavLink to="/categoryPage/microcard">Feeding</NavLink>
                  </li>
                  <li>
                    <NavLink to="/product/633c254de61b3de006af2aa9">
                      Baby Gear
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/categoryPage/garlictools">
                      Toys and Games
                    </NavLink>
                    <ul className="third">
                      <li>
                        <NavLink to="/product/633c2c95e61b3de006af2ae7">
                          Art and Cart for kids
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/product/633c2ae2e61b3de006af2ad5">
                          Dolls and Accessories
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/product/633c2898e61b3de006af2ac5">
                          Learning and Education
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Stuffed Toyes</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/product/633c2ac4e61b3de006af2ad3">
                      Clothing and Games
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/categoryPage/diningsets">
                      Remote controle & Vehicles
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/product/633c2a69e61b3de006af2acf">
                  Home and LifyStyle
                </NavLink>
              </li>
              <li>
                <NavLink to="/categoryPage/mobiles">Electronic Devices</NavLink>
              </li>
              <li>
                <NavLink to="/product/633d21b0da90b1266dd260c8">
                  Watches, bags and Jewellery
                </NavLink>
              </li>
              <li>
                <NavLink to="/categoryPage/paintguns">
                  Sports and Outdoor
                </NavLink>
              </li>
              <li>
                <NavLink to="/categoryPage/diningsets">
                  {" "}
                  TV & Home Appliances
                </NavLink>
              </li>
              <li>
                <NavLink to="/categoryPage/featurephone">
                  Automotiv & Jewellary
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
