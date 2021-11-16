import { useContext } from 'react';

import { MoviesContext } from '../context/Movies';

const useMovies = () => useContext(MoviesContext);

export default useMovies;
