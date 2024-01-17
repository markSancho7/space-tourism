import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Destination from '../pages/destination/Destination';
import Home from '../pages/home/Home';
import Technology from '../pages/technology/Technology';
import Crew from '../pages/crew/Crew';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/DESTINATION' element={<Destination />} />
				<Route path='/CREW' element={<Crew />} />
				<Route path='/TECHNOLOGY' element={<Technology />} />
			</Route>
		</Routes>
	);
};
export default Router;
