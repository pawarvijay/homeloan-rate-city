import React from "react";
import { useApp } from "./useApp";

export default function App() {
  const [data, first, prev, next, last, jump] = useApp();

  return  (
    <>
      <br />
      {data && (
        <>
          <div>
            Home Loans
            <br />
            <br />
            <button onClick={first}>First</button>
            <button onClick={prev}>Previous</button>
            {Array.from({ length: data.meta.page_count })
              .map((_, i) => i + 1)
              .map((item) => {
                return (
                  <button key={item} onClick={() => jump(item)}>
                    {item}
                  </button>
                );
              })}
            <button onClick={next}>Next</button>
            <button onClick={last}>Last</button>
          </div>

          <table border="1px" width="100%">
            <thead>
              <tr>
                <th>Company</th>
                <th>Name</th>
                <th>Advertised Rate</th>
                <th>Up Front fee</th>
                <th>Legal fee</th>
              </tr>
            </thead>
            <tbody>
              {data.hits.map((loan, i) => (
                <tr key={loan.uuid}>
                  <td>{loan.company.name}</td>
                  <td>{loan.name}</td>
                  <td>{loan.advertisedRate}</td>
                  <td>{loan.upfrontFee}</td>
                  <td>{loan.legalFee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
