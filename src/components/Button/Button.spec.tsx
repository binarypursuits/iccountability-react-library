import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('Should render', () => {
    const component = render(<Button label="Hello world!" />);
    expect(component).toBeTruthy();
  });
});
