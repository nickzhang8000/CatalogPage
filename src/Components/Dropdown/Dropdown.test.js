
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import DropdownElement from './Dropdown';
import { DropdownButton , Dropdown } from "react-bootstrap";
configure({adapter: new Adapter()});


const props = {
  sortType: "Popularity",
};

describe('<DropdownElement />', () => {
  it('should render div tag', () => {
    const renderedComponent = shallow(<DropdownElement {...props}/>);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('renders one DropdownButton', () => {
    const renderedComponent = shallow(<DropdownElement {...props}/>);
    expect(renderedComponent.find(DropdownButton)).toHaveLength(1);
  });

  it('renders six Dropdown items', () => {
    const renderedComponent = shallow(<DropdownElement {...props}/>);
    expect(renderedComponent.find(Dropdown.Item)).toHaveLength(6);
  });
});
