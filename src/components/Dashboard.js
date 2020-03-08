import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import Total from '../containers/Total'
import AddRestaurant from '../containers/AddRestaurant'
 
const Dashboard = (props) => {

    return (
        <Container maxWidth="lg" className="restaurant-container">
            <div className="flex-container">
                <Total />
                <AddRestaurant restaurantTotal={props.restaurants.length} />
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.restaurants.map((restaurant, idx) => (
                    <TableRow key={restaurant.id}>
                        <TableCell component="th" scope="row">
                            {restaurant.id}
                        </TableCell>
                        <TableCell>{restaurant["name"]}</TableCell>
                        <TableCell>{restaurant["description"]}</TableCell>
                        <TableCell>{restaurant["address"]}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Dashboard