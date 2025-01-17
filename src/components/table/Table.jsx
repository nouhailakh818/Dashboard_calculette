import "./Table.scss"




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
        customer: "John Smith",
        date: "1 March",
        amount: 785,
         role: "agent",
        Permission:"add",
        status: "Approved",
      },
      {
        id: 2235235,
        customer: "Michael Doe",
        date: "1 March",
        amount: 900,
         role: "agent",
        Permission:"add",
        status: "Pending",
      },
      {
        id: 2342353,
        customer: "John Smith",
        date: "1 March",
        amount: 35,
        role: "agent",
        Permission:"Recieve",
        status: "Pending",
      },
      {
        id: 2357741,
        customer: "Jane Smith",
        date: "1 March",
        amount: 920,
        role: "agent",
        Permission:"add",
        status: "Approved",
      },
      {
        id: 2342355,
        customer: "Harold Carol",
        date: "1 March",
        amount: 2000,
        role: "agent",
        Permission:"Recieve ",  
         status: "Pending",
      },
    ];
      
  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">Tracking ID</TableCell>
          <TableCell className="tableCell"></TableCell>
          <TableCell className="tableCell">Customer</TableCell>
          <TableCell className="tableCell">Date</TableCell>
          <TableCell className="tableCell">Amount</TableCell>

          <TableCell className="tableCell">Role</TableCell>
          <TableCell className="tableCell">Permission</TableCell>
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
            <TableCell className="tableCell">{row.role}</TableCell>
            <TableCell className="tableCell">{row.Permission}</TableCell>

            <TableCell className="tableCell">
              <span className={`status ${row.status}`}>{row.status}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List;