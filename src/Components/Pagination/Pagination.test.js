
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import PaginationElement from './Pagination';
import { Pagination } from "react-bootstrap";

configure({adapter: new Adapter()});

const props = {
  sortType: "Popularity",
  page: 1,
};

describe('<PaginationElement />', () => {
  it('should have classname Pagination', () => {
    const renderedComponent = shallow(<PaginationElement {...props}/>);
    expect(renderedComponent.prop("className")).toEqual('Pagination');
  });

  it('should render Component Pagination', () => {
    const renderedComponent = shallow(<PaginationElement {...props}/>);
    expect(renderedComponent.find(Pagination)).toBeTruthy();
  });

  it('should render 5 pagenation items', () => {
    const renderedComponent = shallow(<PaginationElement {...props}/>);
    expect(renderedComponent.find(Pagination.Item)).toHaveLength(5);
  });

  it('should render 1 prev pagenation item', () => {
    const renderedComponent = shallow(<PaginationElement {...props}/>);
    expect(renderedComponent.find(Pagination.Prev)).toHaveLength(1);
  });

  it('should render 1 next pagenation item', () => {
    const renderedComponent = shallow(<PaginationElement {...props}/>);
    expect(renderedComponent.find(Pagination.Next)).toHaveLength(1);
  });
});
