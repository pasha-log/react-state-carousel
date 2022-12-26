import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

it('should render', () => {
	render(<Card caption="This is a fake picture" src="picture.png" currNum={1} totalNum={1} />);
});

it('should match snapshot', () => {
	const { asFragment } = render(<Card caption="This is a fake picture" src="picture.png" currNum={1} totalNum={1} />);
	expect(asFragment()).toMatchSnapshot();
});
