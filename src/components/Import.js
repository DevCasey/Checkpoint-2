import React from 'react'

import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import Menu from '@material-ui/core/Menu'
import { Button, Container, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import '../App.css'




const Import = (props) => {
    // fill out this component

    const handleDelete = (e) => {
        alert('test');
    }

    return (
        <div>
            <h2>Count: {props.makes.length}</h2>
            <Container>
                <p />
                <Button onClick={props.fetchMakes} variant="contained" color="primary">Import</Button>
                <p />
                <TableHead>
                    <TableRow>
                        <TableCell align="left">ID</TableCell>
                        <TableCell align="left">Make</TableCell>
                        <TableCell align="left">Actions</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {props.makes.map((make, index) => {
                        return (
                            <TableRow key={make.MakeID}>
                                <TableCell align="left">{make.MakeID}</TableCell>
                                <TableCell align="left">{make.MakeName}</TableCell>
                                <TableCell align="left">
                                    <DeleteForeverOutlinedIcon className="delete-button" onClick={handleDelete}/>
                                    <Menu />
                                </TableCell>
                            </TableRow>
                            
                        )
                    })}
                </TableBody>
            </Container>
        </div>
    )
}

export default Import