import { Table } from "react-bootstrap";

function Cart() {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Quantity</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Picture 0</td>
          <td>3</td>
          <td>???</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Cart;
