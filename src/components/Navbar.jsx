import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <div className="Main">
      <ul className="Details">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <HashLink smooth to="/#about">
            About{" "}
          </HashLink>
        </li>
        {/* <li>
          <HashLink smooth to="/#contact">
            About{" "}
          </HashLink>
        </li> */}
        <li>
          <Link to="/category">Category </Link>
        </li>
        <li>
          <Link to="/product">Product Details</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/chechout">Checkout</Link>
        </li>
        <li>
          <Link to="/megamenu1">MegaMenu 1</Link>
        </li>
        <li>
          <Link to="/megamenu2">Megamenu 2</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
