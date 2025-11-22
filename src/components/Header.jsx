import Navbar from "./Navbar";
import "../styles/Navbar.css";
function Header() {
  return (
    <>
      <div className="MainHeader">
        <div className="SecondHeaderDiv">
          <h1>Bittu</h1>
          <div className="inputDiv">
            <input
              className="search-btn"
              type="text"
              placeholder="search medical..."
              name="medical"
            ></input>
            <button className="click-btn">🔍 </button>
          </div>
        </div>
        <ul className="UerIcon">
          <li>
            <i class="fa-solid fa-user"> </i>
          </li>

          <li>
            <i class="fa-regular fa-heart"></i>
          </li>

          <li>
            <i class="fa-solid fa-cart-arrow-down"></i>
          </li>
        </ul>
      </div>
      <Navbar />
    </>
  );
}

export default Header;
