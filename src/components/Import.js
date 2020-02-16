import React from 'react'
import { Button, Container, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import '../App.css'




const Import = (props) => {
    // fill out this component

    return (
        <div>
            <Container maxWith="xl" className="button-container">
                <Button variant="contained" color="primary">Import</Button>
            </Container>

            <Container className="main-container">  
                <Container className="table-container" >
                    <TableBody className="table-body">
                        <TableCell align="left">ID</TableCell>
                        <TableCell align="left">Make</TableCell>
                        <TableCell align="left">Actions</TableCell>
                    </TableBody>
                </Container>  
            </Container>
        </div>
    )
}

export default Import