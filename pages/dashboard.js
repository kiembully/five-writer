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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Skeleton from '@mui/material/Skeleton';

// css 
import dashboardStyles from '../styles/Dashboard.module.scss';
import { useEffect, useState } from 'react';

// api helper 
import { apiHelper } from '../helper/apiHelper'

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

    return ( <
        Box sx = {{ flexShrink: 0, ml: 2.5 } } className={ dashboardStyles.boxWrap } >
        <IconButton onClick = { handleFirstPageButtonClick } disabled = { page === 0 } aria-label="first page">
        { theme.direction === 'rtl' ? < LastPageIcon / > : < FirstPageIcon / > } </IconButton>
        <IconButton onClick = { handleBackButtonClick }
        disabled = { page === 0 }
        aria-label = "previous page" >
        { theme.direction === 'rtl' ? < KeyboardArrowRight / > : < KeyboardArrowLeft / > } </IconButton>
        <IconButton onClick = { handleNextButtonClick }
        disabled = { page >= Math.ceil(count / rowsPerPage) - 1 }
        aria-label = "next page" >
        { theme.direction === 'rtl' ? < KeyboardArrowLeft / > : < KeyboardArrowRight / > } 
        </IconButton>
        <IconButton onClick = { handleLastPageButtonClick }
        disabled = { page >= Math.ceil(count / rowsPerPage) - 1 }
        aria-label="last page" >
        { theme.direction === 'rtl' ? < FirstPageIcon / > : < LastPageIcon / > } </IconButton> 
        </Box>
    );
}

const Dashboard = (data) => {
    const user_token = typeof window !== 'undefined' ? localStorage.getItem('user_token') : null;
    // initialize orders 
    const [apiLoader, setApiLoader] = useState(true);
    const [myOrders, setMyOrders] = useState();
    const [orderCount, setOrderCount] = useState(0);
    const [orderMessage, setOrderMessage] = useState();
    useEffect(() => {
            // available,current,bid,revision,completed,cancelled
            setOrders('available');
        }, [])
        // search filters 
    const [filterValue, setFilterValue] = useState('available');
    const [textFilter, setTextFilter] = useState('');
    const handleFilterValue = (event) => {
        setApiLoader(true);
        setFilterValue(event.target.value);
        setOrders(event.target.value)
    }
    const handleTextFilter = (event) => {
            setTextFilter(event.target.value);
        }
        // pagination 
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - orderCount) : 0;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    function setPaymentStatusStyle(status) {
        // available,current,bid,revision,completed,cancelled
        return status == 'Unpaid' ? { color: '#FF5B5B' } : { color: '#7ed321' };
    }

    function setOrderStatusStyle(status) {
        // Processing, Waiting for Payment, Paid
        switch (status) {
            case 'Waiting for Payment':
                return { color: '#FF5B5B' }
            case 'Completed':
                return { color: '#7ed321' }
            default:
                return { color: '#56AAFF' }
        }
    }

    function setOrders(status) {
        const formData = new FormData();
        const headers = { Authorization: user_token };

        formData.append("status", status);

        apiHelper("orders/list", "POST", formData, headers)
            .then((res) => {
                setApiLoader(false);
                const response = res.data;

                if (response.status) {
                    setMyOrders(response.data.orders)
                    setOrderCount(response.data.count)
                    if (response.data.count < 1) {
                        setOrderMessage('No results found.');
                    }
                } else {
                    setOrderMessage(response.message + '.');
                    setOrderCount(0)
                }
            })
            .catch((error) => console.error(`Error: ${error}`));
    }

    return ( 
        <div className={ dashboardStyles.dashboardWrap }>
            <div className={ dashboardStyles.orderFilter }>
                <span className={ dashboardStyles.spnMobFilter }>
                    <FormControl fullWidth className={ dashboardStyles.fcSelectFilter }>
                        <InputLabel id="mob-select-filter-label"> Filter </InputLabel>
                        <Select labelId="mob-select-filter-label" id="mob-select-filter" value={ filterValue } label="Filter" onChange={ handleFilterValue }>
                            <MenuItem value="available"> Available Orders </MenuItem>
                            <MenuItem value="current"> Current Orders </MenuItem>
                            <MenuItem value="bid"> Order For Bid </MenuItem>
                            <MenuItem value="revision"> Revision Orders </MenuItem>
                            <MenuItem value="completed"> Completed Orders </MenuItem>
                            <MenuItem value="cancelled"> cancelled Orders </MenuItem>
                        </Select>
                    </FormControl>
                </span>
                <span className={ dashboardStyles.spnWebFilter }>
                    <button type="input" value="available" className={ filterValue=="available" ? dashboardStyles.active : '' } onClick={ handleFilterValue }> Available Orders < span className={ dashboardStyles.badgeNotif }> 01 </span></button>
                    <button type="input" value="current" className={ filterValue=="current" ? dashboardStyles.active : '' } onClick={ handleFilterValue }> Current Orders < span className={ dashboardStyles.badgeNotif }> 01 </span></button>
                    <button type="input" value="bid" className={ filterValue=="bid" ? dashboardStyles.active : '' } onClick={ handleFilterValue }> Order For Bid < span className={ dashboardStyles.badgeNotif }> 01 </span></button>
                    <button type="input" value="revision" className={ filterValue=="revision" ? dashboardStyles.active : '' } onClick={ handleFilterValue }> Revision Orders < span className={ dashboardStyles.badgeNotif }> 01 </span></button>
                    <button type="input" value="completed" className={ filterValue=="completed" ? dashboardStyles.active : '' } onClick={ handleFilterValue }> Completed Orders < span className={ dashboardStyles.badgeNotif }> 01 </span></button>
                    <button type="input" value="cancelled" className={ filterValue=="cancelled" ? dashboardStyles.active : '' } onClick={ handleFilterValue }> Cancelled Orders < span className={ dashboardStyles.badgeNotif }> 01 </span></button>
                </span>
                <span className={ dashboardStyles.spnFlexSplit }> </span>
                <span className={ dashboardStyles.spnSearchWrap }>
                    <span>
                        <MdSearch /> </span>
                    <input type="text" placeholder="Search..." value={ textFilter } onChange={ handleTextFilter } />
                </span>
            </div>
            <TableContainer component={ Paper } className={ dashboardStyles.tblContainer }>
                <Table sx={ { minWidth: 650 } } aria-label="orders table">
                    <TableHead>
                        <TableRow className={ dashboardStyles.trHeaders }>
                            <TableCell className={ dashboardStyles.tblCell } align="center"> Order ID </TableCell>
                            <TableCell className={ dashboardStyles.tblCell } align="center"> Total Page Price </TableCell>
                            <TableCell className={ dashboardStyles.tblCell } align="center"> Per Page </TableCell>
                            <TableCell className={ dashboardStyles.tblCell } align="center"> Pages </TableCell>
                            <TableCell className={ dashboardStyles.tblCell } align="center"> Total Slide Price </TableCell>
                            <TableCell className={ dashboardStyles.tblCell } align="center"> Per Slide </TableCell>
                            <TableCell className={ dashboardStyles.tblCell } align="center"> Slides </TableCell>
                            <TableCell className={ dashboardStyles.tblCell } align="center"> Type of Paper </TableCell>
                            <TableCell className={ dashboardStyles.tblCell } align="center"> Subject </TableCell>
                            <TableCell className={ dashboardStyles.tblCell } align="center"> Type of Service </TableCell>
                            <TableCell className={ dashboardStyles.tblCell } align="center"> Academic Level </TableCell>
                            <TableCell className={ dashboardStyles.tblCell } align="center"> Payment Status </TableCell>
                            <TableCell className={ dashboardStyles.tblCell } align="center"> Deadline </TableCell>
                            <TableCell className={ dashboardStyles.tblCell } align="center"> Order Status </TableCell>
                        </TableRow>
                    </TableHead> 
                        { apiLoader || orderCount < 1 ? 
                        <TableBody>
                            <TableRow>
                                <TableCell className={ dashboardStyles.tblCell } colSpan={14}> {apiLoader || orderCount > 0 ? <>
                                        <h3>
                                            <Skeleton animation="wave" />
                                        </h3>
                                        <h3>
                                            <Skeleton animation="wave" />
                                        </h3>
                                        <h3>
                                            <Skeleton animation="wave" />
                                        </h3>
                                        <h3>
                                            <Skeleton animation="wave" />
                                        </h3>
                                        <h3>
                                            <Skeleton animation="wave" />
                                        </h3>
                                    </> : <h3 className={dashboardStyles.h3emptyList}>{orderMessage}</h3> } </TableCell>
                            </TableRow>
                        </TableBody>
                        :
                        <TableBody>{ (rowsPerPage > 0 ? myOrders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : myOrders ).map((row, index) => ( 
                            <TableRow key={ index } sx={ { '&:last-child td, &:last-child th' : { border: 0 } } }>
                                <TableCell className={ `${dashboardStyles.orderId} ${dashboardStyles.tblCell}` } align="center">{ row.order_id }</TableCell>
                                <TableCell className={ dashboardStyles.tblCell } align="center">{row.total_page_price}</TableCell>
                                <TableCell className={ dashboardStyles.tblCell } align="center">{row.per_page}</TableCell>
                                <TableCell className={ dashboardStyles.tblCell } align="center">{row.pages}</TableCell>
                                <TableCell className={ dashboardStyles.tblCell } align="center">{row.total_slide_price}</TableCell>
                                <TableCell className={ dashboardStyles.tblCell } align="center">{row.per_slide}</TableCell>
                                <TableCell className={ dashboardStyles.tblCell } align="center">{row.slides}</TableCell>
                                <TableCell className={ dashboardStyles.tblCell } align="center">{row.type_of_paper}</TableCell>
                                <TableCell className={ dashboardStyles.tblCell } align="center">{row.subject}</TableCell>
                                <TableCell className={ dashboardStyles.tblCell } align="center">{row.type_of_service}</TableCell>
                                <TableCell className={ dashboardStyles.tblCell } align="center">{row.academic_level}</TableCell>
                                <TableCell className={ dashboardStyles.tblCell } align="center" style={ setPaymentStatusStyle(row.payment_status) }>{ row.payment_status }</TableCell>
                                <TableCell className={ dashboardStyles.tblCell } align="center">deadline</TableCell>
                                <TableCell className={ dashboardStyles.tblCell } align="center" style={ setOrderStatusStyle(row.order_status) }>{ row.order_status }</TableCell>
                            </TableRow> )) }
                        </TableBody>
                        }
                        <TableFooter>{ orderCount > 1 ?
                            <TableRow>
                                <TablePagination className={ dashboardStyles.tpOrders } rowsPerPageOptions={ [5, 10, 25, { label: 'All' , value: -1 }] } colSpan={ 14 } count={ orderCount } rowsPerPage={ rowsPerPage } page={ page } SelectProps={ { inputProps: { 'aria-label' : 'Rows per page' , }, native: true, } } onPageChange={ handleChangePage } onRowsPerPageChange={ handleChangeRowsPerPage } ActionsComponent={ TablePaginationActions } />
                            </TableRow> : null } 
                        </TableFooter>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Dashboard;