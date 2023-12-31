import Cart from "../features/cart/Cart";
import Footer from "../features/common/Footer";
import NavBar from "../features/navbar/Navbar";

function CartPage() {
  return (
    <div>
      <NavBar>
        <Cart></Cart>
      </NavBar>
      <Footer></Footer>
    </div>
  );
}

export default CartPage;
