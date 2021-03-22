import React, { Children } from 'react';
import Navbar from '../Navbar/Navbar';

// cuando hacemos ../../ para importar,se le llama 'import hell o dot hell'. 
//A medida que nuestro proyecto crece,  necesitamos ir a componentes mas arribas, entonces para mucho mejor de nuestro codigo usamos path alias.
//path aliases -en typeScript: 
/*
Json

*/
const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Navbar />
            {Children}
            <footer>Este es el footer ejemplo</footer>
        </div>

    )
}

export default Layout;