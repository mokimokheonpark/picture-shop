import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { increaseQuantity } from "../store/cartSlice";

function Cart() {
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

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
      <tbody>
        {state.cartSlice.map((_, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{state.cartSlice[i].title}</td>
            <td>{state.cartSlice[i].quantity}</td>
            <td>
              <button
                onClick={() => {
                  dispatch(increaseQuantity(state.cartSlice[i].id));
                }}
              >
                +
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Cart;
