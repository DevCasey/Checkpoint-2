import React from 'react'
import { Container, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'

const Home = (props) => {
    let isLogged = document.cookie;
    return (
        <Container maxWidth="lg" className="restaurant-container">
        <div className="flex-container">
        </div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Address</TableCell>
                    {isLogged == 'loggedIn=true' && (<TableCell>Delete</TableCell>)}
                </TableRow>
            </TableHead>
            <TableBody>
            {props.restaurants.map((restaurant, idx) => (
                <TableRow key={restaurant.id}>

                    <TableCell component="th" scope="row">
                        {restaurant.id}
                    </TableCell>

                    <TableCell>
                        <Link to={`/restaurants/${restaurant.id}`}>{restaurant["name"]}</Link>
                    </TableCell>

                    <TableCell>{restaurant["description"]}</TableCell>
                    <TableCell>{restaurant["address"]}</TableCell>
                    {isLogged == 'loggedIn=true' && (<TableCell>
                        <DeleteIcon
                            onClick={() => props.removeRestaurant(idx)}
                            className="icon text-red" />
                    </TableCell>)}
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </Container>
    )
}

export default Home


// <div className="card-container">
// {props.cars.map((car, idx) => (
//     <Card key={idx} className="card">
//         <CardContent className="text-gray">
//             <span>{car.name.toUpperCase()}</span>
//             <ul>
//             <li>Miles per Gallon: {car["mpg"]}</li>
//             <li>Cylinders: {car["cylinders"]}</li>
//             <li>Horsepower: {car["horsepower"]}</li>
//             </ul>
//         </CardContent>
//         <Divider />
//         <CardActions style={{ color: 'mediumblue' }}>
//             <Link to={`/car/${car.id}`}>See More Details</Link>
//         </CardActions>
//     </Card>
// ))}
// </div>