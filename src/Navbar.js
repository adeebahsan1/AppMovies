// import React, { Component } from "react";

// class Navbar extends Component {
//   render() {
//     return (
//       <div style={styles.nav}>
//         <div style={styles.title}>Movie-App</div>
//         <div style={styles.cartIconContainer}>
//           <img
//             style={styles.cartIcon}
//             src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
//             alt="cart-icon"
//           />
//           <span style={styles.cartCount}>3</span>
//         </div>
//       </div>
//     );
//   }
// }

// const styles = {
//   cartIcon: {
//     height: 48,
//     marginRight: 20,
//   },
//   nav: {
//     height: 70,
//     background: "#4267b2",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     position: "relative",
//   },
//   title: {
//     fontSize: 30,
//     color: "#fff",
//     fontWeight: 600,
//     fontFamily: '"Montserrat", sans-serif',
//     textTransform: "uppercase",
//     marginLeft: 20,
//   },

//   cartIconContainer: {
//     position: "relative",
//     cursor: "pointer",
//   },
//   cartCount: {
//     background: "orange",
//     borderRadius: "50%",
//     padding: "4px 8px",
//     position: "absolute",
//     right: 10,
//     top: -5,
//     fontSize: 12,
//   },
// };

// export default Navbar;

// import React from "react";
// import "./styles.css";
// import styled from "styled-components";

// const Nav = styled.div`
//   height: 70px;
//   background: linear-gradient(170deg, #1bc059, #0d47a1);
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: relative;
// `;

// const Title = styled.div`
//   font-size: 30px;
//   color: #fff;
//   font-weight: 600;
//   font-family: "Times New Roman", Times, serif;
//   text-transform: uppercase;
//   margin-left: 20px;
// `;

// const CartImg = styled.img`
//   height: 48px;
//   margin-right: 20px;
// `;

// const CartIconContainer = styled.div`
//   position: relative;
//   cursor: pointer;
// `;

// const CartCount = styled.div`
//   background: yellow;
//   border-radius: 50%;
//   padding: 4px 8px;
//   position: absolute;
//   right: 10px;
//   top: -5px;
//   font-size: 12px;
// `;

// class Navbar extends React.Component {
//   render() {
//     return (
//       <>
//         <Nav>
//           <Title>MOVIE APP</Title>

//           <CartIconContainer>
//             <CartImg
//               alt="Cart-Icon"
//               src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
//             />
//             <CartCount>5</CartCount>
//           </CartIconContainer>
//         </Nav>
//       </>
//     );
//   }
// }

// export default Navbar;

import React from "react";
import styles from "./Navbar.module.css";

class Navbar extends React.Component {
  render() {
    const { cartCount } = this.props;
    return (
      <>
        <div className={styles.nav}>
          <div className={styles.title}>MOVIE APP</div>

          <div className={styles.cartIconContainer}>
            <img
              className={styles.cartIcon}
              alt="Cart-Icon"
              src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            />
            <span className={styles.cartCount}>{cartCount}</span>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
