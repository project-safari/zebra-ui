import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "3 Node Setup",
      img: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/w0jp4bmv89nqrd83keix",
      customer: "John Smith",
      date: "7:30 A.M.",
      amount: "30 minutes",
      method: "CNT",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "40 Node Setup",
      img: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/w0jp4bmv89nqrd83keix",
      customer: "Michael Doe",
      date: "7:00 A.M.",
      amount: "1 hour 40 minutes",
      method: "DCN",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "2 APIC 3 Node Setup",
      img: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/w0jp4bmv89nqrd83keix",
      customer: "John Smith",
      date: "7:37 A.M.",
      amount: "25 minutes",
      method: "WEBEX",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "2 APIC 3 Node Setup",
      img: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/w0jp4bmv89nqrd83keix",
      customer: "Jane Smith",
      date: "6:45 A.M.",
      amount: "3 hours",
      method: "CNT",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "2 APIC 3 Node Setup",
      img: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/w0jp4bmv89nqrd83keix",
      customer: "Harold Carol",
      date: "9:15 A.M.",
      amount: "2 hours 20 minutes",
      method: "CNT",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Setup ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Reservation Time</TableCell>
            <TableCell className="tableCell">Time Until Expiry</TableCell>
            <TableCell className="tableCell">Team</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;