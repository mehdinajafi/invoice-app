import { styled } from "stitches-config";
import IInvoice from "types/invoice";
import { addCommas } from "utilities/misc";

const TableWrapper = styled("div", {
  gridArea: "6 / 1 / 7 / -1",
  borderRadius: "8px",
  overflow: "hidden",

  "& table": {
    backgroundColor: "hsl(228, 71%, 99%)",
    width: "100%",
    paddingTop: "2rem",
    borderSpacing: "0",
    fontFamily: "$spartan",

    "& thead": {
      display: "none",

      "@sm": {
        display: "table-header-group",
      },

      "& tr": {
        color: "$ntrl-ltr",
        fontSize: "$xxs",
        fontWeight: 500,

        "& th": {
          textAlign: "end",
          padding: "0px 0px 2rem",

          "&:nth-child(1)": {
            padding: "0px 0px 2rem 2rem",
            textAlign: "start",
          },
          "&:nth-child(2)": {
            textAlign: "center",
          },
          "&:last-child": {
            padding: "0px 2rem 2rem 0px",
          },
        },
      },
    },

    "& tbody": {
      "& tr": {
        "& td": {
          fontSize: "$xs",
          fontWeight: 700,
          textAlign: "end",
          paddingBlockEnd: "2rem",

          "&:nth-child(1)": {
            padding: "0px 0px 2rem 2rem",
            textAlign: "start",
            color: "$ntrl-dkr",
          },
          "&:nth-child(2)": {
            textAlign: "center",
            color: "$ntrl-ltr",
            display: "none",
            "@sm": {
              display: "table-cell",
            },
          },
          "&:nth-child(3)": {
            color: "$ntrl-ltr",
            display: "none",
            "@sm": {
              display: "table-cell",
            },
          },
          "&:nth-child(4)": {
            padding: "0px 2rem 2rem 0px",
            color: "$ntrl-dkr",
          },
        },
      },
    },

    "& tfoot": {
      backgroundColor: "$ntrl-dk",
      color: "White",

      "& tr": {
        "& td": {
          "&:first-child": {
            textAlign: "start",
            padding: "2rem 0 2rem 2rem",
            fontSize: "$xxs",
            fontWeight: 700,
          },
          "&:nth-child(2)": {
            display: "none",
            "@sm": {
              display: "table-cell",
            },
          },
          "&:nth-child(3)": {
            display: "none",
            "@sm": {
              display: "table-cell",
            },
          },
          "&:last-child": {
            textAlign: "end",
            padding: "2rem 2rem 2rem 0px",
            fontWeight: 700,
            fontSize: "$lg",

            "@sm": {
              fontSize: "$xxl",
            },
          },
        },
      },
    },
  },
});

interface IItemsTable {
  invoice: IInvoice;
}

const ItemsTable: React.FC<IItemsTable> = ({ invoice }) => {
  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>QTY.</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${addCommas(item.price)}</td>
              <td>${addCommas(item.total)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Amount Due</td>
            <td></td>
            <td></td>
            <td>${addCommas(invoice.total)}</td>
          </tr>
        </tfoot>
      </table>
    </TableWrapper>
  );
};

export default ItemsTable;
