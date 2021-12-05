// bootstrap 
import Button from 'react-bootstrap/Button'
import { MdSearch } from 'react-icons/md';

// mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

// css 
import dashboardStyles from '../styles/Dashboard.module.scss';
import { useState } from 'react';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }} className={dashboardStyles.boxWrap}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}


function createData(
    order_id,
    total,
    per_page,
    pages,
    slide_price,
    per_slides,
    slides,
    paper_type,
    subject,
    service_type,
    level,
    status,
    deadline,
    payment_status
) {
  return {
    order_id,
    total,
    per_page,
    pages,
    slide_price,
    per_slides,
    slides,
    paper_type,
    subject,
    service_type,
    level,
    status,
    deadline,
    payment_status,
  };
}
const rows = [
  createData(
      110622,'$40','$8',5,'$0.00','$0','0','Reasearch Paper','English','Writing','College','Unpaid','5d 12h 54m 52s','Processing'
  ),
  createData(
      110622,'$40','$8',5,'$0.00','$0','0','Reasearch Paper','English','Writing','College','Unpaid','5d 12h 54m 52s','Processing'
  ),
  createData(
      110622,'$40','$8',5,'$0.00','$0','0','Reasearch Paper','English','Writing','College','Unpaid','5d 12h 54m 52s','Processing'
  ),
  createData(
      110622,'$40','$8',5,'$0.00','$0','0','Reasearch Paper','English','Writing','College','Unpaid','5d 12h 54m 52s','Processing'
  ),
  createData(
      110622,'$40','$8',5,'$0.00','$0','0','Reasearch Paper','English','Writing','College','Unpaid','5d 12h 54m 52s','Processing'
  ),
  createData(
      110622,'$40','$8',5,'$0.00','$0','0','Reasearch Paper','English','Writing','College','Unpaid','5d 12h 54m 52s','Processing'
  ),
  createData(
      110622,'$40','$8',5,'$0.00','$0','0','Reasearch Paper','English','Writing','College','Unpaid','5d 12h 54m 52s','Processing'
  ),
  createData(
      110622,'$40','$8',5,'$0.00','$0','0','Reasearch Paper','English','Writing','College','Unpaid','5d 12h 54m 52s','Processing'
  ),
  createData(
      110622,'$40','$8',5,'$0.00','$0','0','Reasearch Paper','English','Writing','College','Unpaid','5d 12h 54m 52s','Processing'
  ),
  createData(
      110622,'$40','$8',5,'$0.00','$0','0','Reasearch Paper','English','Writing','College','Unpaid','5d 12h 54m 52s','Processing'
  ),
  createData(
      110622,'$40','$8',5,'$0.00','$0','0','Reasearch Paper','English','Writing','College','Unpaid','5d 12h 54m 52s','Processing'
  ),
  createData(
      110622,'$40','$8',5,'$0.00','$0','0','Reasearch Paper','English','Writing','College','Unpaid','5d 12h 54m 52s','Processing'
  ),
  createData(
      110622,'$40','$8',5,'$0.00','$0','0','Reasearch Paper','English','Writing','College','Unpaid','5d 12h 54m 52s','Processing'
  ),
  createData(
      110622,'$40','$8',5,'$0.00','$0','0','Reasearch Paper','English','Writing','College','Unpaid','5d 12h 54m 52s','Processing'
  ),
  createData(
      110622,'$40','$8',5,'$0.00','$0','0','Reasearch Paper','English','Writing','College','Unpaid','5d 12h 54m 52s','Processing'
  ),
  createData(
      110622,'$40','$8',5,'$0.00','$0','0','Reasearch Paper','English','Writing','College','Unpaid','5d 12h 54m 52s','Processing'
  ),
  createData(
      110622,'$40','$8',5,'$0.00','$0','0','Reasearch Paper','English','Writing','College','Unpaid','5d 12h 54m 52s','Processing'
  ),
  createData(
      110622,'$40','$8',5,'$0.00','$0','0','Reasearch Paper','English','Writing','College','Unpaid','5d 12h 54m 52s','Processing'
  ),
  createData(
      110622,'$40','$8',5,'$0.00','$0','0','Reasearch Paper','English','Writing','College','Unpaid','5d 12h 54m 52s','Processing'
  ),
];

const Dashboard = () => {
    const [filterValue, setFilterValue] = useState(1);
    const handleFilterValue = (event) => {
        setFilterValue(event.target.value)
    }

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    
    return (
        <div className={dashboardStyles.dashboardWrap}>
            <div className={dashboardStyles.orderFilter}>
                <span>
                    <button type="input" value="1" className={filterValue==1?dashboardStyles.active:''} onClick={handleFilterValue}>Available Orders</button>
                    <button type="input" value="2" className={filterValue==2?dashboardStyles.active:''} onClick={handleFilterValue}>Current Orders</button>
                    <button type="input" value="3" className={filterValue==3?dashboardStyles.active:''} onClick={handleFilterValue}>Order For Bid</button>
                    <button type="input" value="4" className={filterValue==4?dashboardStyles.active:''} onClick={handleFilterValue}>Revision Orders</button>
                    <button type="input" value="5" className={filterValue==5?dashboardStyles.active:''} onClick={handleFilterValue}>Completed Orders</button>
                    <button type="input" value="6" className={filterValue==6?dashboardStyles.active:''} onClick={handleFilterValue}>Canceled Orders</button>
                </span>
                <span></span>
                <span>
                    <span><MdSearch /></span>
                    <input type="text" placeholder="Search..."></input>
                </span>
            </div>
            
            <TableContainer component={Paper} className={dashboardStyles.tblContainer}>
            <Table sx={{ minWidth: 650 }} aria-label="orders table">
                <TableHead>
                <TableRow>
                    <TableCell className={dashboardStyles.tblCell} align="center">Order ID</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">Total Page Price</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">Per Page</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">Pages</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">Total Slide Price</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">Per Slide</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">Slides</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">Type of Paper</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">Subject</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">Type of Service</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">Academic Level</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">Payment Status</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">Deadline</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">Payment Status</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {(rowsPerPage > 0
                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : rows
                ).map((row, index) => (
                    <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell className={`${dashboardStyles.orderId} ${dashboardStyles.tblCell}`} align="center">{row.order_id}</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">{row.total}</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">{row.per_page}</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">{row.pages}</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">{row.slide_price}</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">{row.per_slides}</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">{row.slides}</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">{row.paper_type}</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">{row.subject}</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">{row.service_type}</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">{row.level}</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">{row.status}</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">{row.deadline}</TableCell>
                    <TableCell className={dashboardStyles.tblCell} align="center">{row.payment_status}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
                <TableFooter>
                <TableRow>
                    <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={14}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                        inputProps: {
                        'aria-label': 'rows per page',
                        },
                        native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                    />
                </TableRow>
                </TableFooter>
            </Table>
            </TableContainer>
        </div>
    );
}

export default Dashboard;