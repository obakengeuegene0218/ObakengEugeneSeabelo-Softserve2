import React from 'react';
import { Link} from 'react'

const List =() =>{



    return(
        <div>
            <h2>Customer List</h2>
            <ul>
                <li>
                <Link to="/details/1">Customer 1</Link>
                </li>
                <li>
                <Link to="/details/2">Customer 2</Link>
                </li>
            </ul>

        </div>
    )
}
 export default List;
