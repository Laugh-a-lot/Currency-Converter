import React from "react";
import "./Table.css"

function TableRow(props) {
  return (
      <tr>
        <td data-label="s. no.">{props.sno}</td>
        <td data-label="country name">{props.country}</td>
      <td data-label="rate">{props.rate}</td>
      <td data-label="currency">{props.currency}</td>
      </tr>
  );
}

export default TableRow;
