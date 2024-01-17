import { useState } from 'react';

export const useTabs = () => {
	const [tabNumber, setTabNumber] = useState(0);

	const changeTab = index => {
		setTabNumber(index);
	};

	return { tabNumber, changeTab };
};
