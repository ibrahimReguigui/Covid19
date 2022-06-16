import React from "react";

function Table({ countries }) {
  return (
    <div
      className="table"
      style={{
        height: "400px",
        overflow: "auto",
      }}
    >
      <table>
        <tbody>
          <tr
            style={{
              background: "linear-gradient(to right, #0660c7 , #2bd2e5)",
            }}
          >
            <th>Country</th>
            <th>Cases</th>
          </tr>
          {countries.map((country, i) => (
            <tr key={i}>
              <td>
                {i + 1} - {country.country}
              </td>
              <td>
                <strong>{country.cases}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
