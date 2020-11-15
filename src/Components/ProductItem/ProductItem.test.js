import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import ProductItem from './ProductItem';
configure({adapter: new Adapter()});
import { Col } from "react-bootstrap";

const props = {
  products: []
}; 

describe('<ProductItem />', () => {
  it('should render div tag', () => {
    const renderedComponent = shallow(<ProductItem {...props}/>);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should render classname with ProductItem', () => {
    const renderedComponent = shallow(<ProductItem {...props}/>);
    expect(renderedComponent.find(".ProductItem")).toHaveLength(1);
  });

});
