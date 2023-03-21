import React, { useState, useEffect } from "react";

import { Genre } from "../../models/Genre";
import { getGenres } from '../../services/GenreService';


const Navbar: React.FC = () => {

    const [genres, setGenres] = useState<Genre[]>([]); 

    useEffect(() => {
        function fetchData(): void{
            getGenres()
            .then(data => {
                setGenres(Array.from(data.genres))
              }
        )
     }
        fetchData();
    });

    return (
        <div>
            testing navbarniuhiuhiuh
            <ul>
                { genres.map((genre,index) => (
                    <li key={genre.id}
                    onClick = {() => console.log(genre.id)}>{genre.name}</li>
                ))
                }
            </ul>

            hello 
        </div>
    )
}

export default Navbar;