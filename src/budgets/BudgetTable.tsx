import React from "react";
import CurrencyFormat from "react-currency-format";

import cssClass from "./Table.module.css";

type Costs = Record<"yearly" | "monthly", number>;

interface BudgetTableProps {
  salaries?: Costs;
  benefits?: Costs;
}

export const BudgetTable: React.FC<BudgetTableProps> = (props) => {
  const { salaries, benefits } = props;
  return (
    <table className={cssClass["table"]}>
      <thead>
        <tr>
          <th>costs</th>
          <th>monthly</th>
          <th>yearly</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>salaries</td>
          {salaries ? (
            <>
              <td>
                <CurrencyFormat
                  value={salaries.monthly}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </td>
              <td>
                <CurrencyFormat
                  value={salaries.yearly}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </td>
            </>
          ) : (
            <td colSpan={2}>Loading...</td>
          )}
        </tr>
        <tr>
          <td>benefits</td>
          {benefits ? (
            <>
              <td>
                <CurrencyFormat
                  value={benefits.monthly}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </td>
              <td>
                <CurrencyFormat
                  value={benefits.yearly}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </td>
            </>
          ) : (
            <td colSpan={2}>Loading...</td>
          )}
        </tr>
      </tbody>
    </table>
  );
};
