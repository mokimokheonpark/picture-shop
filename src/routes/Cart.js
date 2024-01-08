import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

function Cart() {
  const state = useSelector((state) => {
    return state;
  });

  return (
    <Table>
      <thead>
        <tr>
          <th>Order</th>
          <th>Title</th>
          <th>Quantity</th>
          <th>User</th>
        </tr>
      </thead>
      {state.cart.map((_, i) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{state.cart[i].title}</td>
          <td>{state.cart[i].quantity}</td>
          <td>{state.cart[i].totalPrice}</td>
        </tr>
      ))}
    </Table>
  );
}

export default Cart;
