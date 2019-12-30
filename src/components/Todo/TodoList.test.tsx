import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { mount } from 'enzyme';

describe("<Todo", () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TodoList />, div);
    });

    it('should match snapshot', () => {
      const mountedComponent = mount(<TodoList />);
      expect(mountedComponent).toMatchSnapshot();
  });
});
