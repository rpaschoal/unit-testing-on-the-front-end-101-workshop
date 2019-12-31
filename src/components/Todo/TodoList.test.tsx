import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { mount, ReactWrapper } from 'enzyme';

describe("<Todo", () => {
    let subject: ReactWrapper;
  
    beforeEach(() => {
      subject = mount(<TodoList />);
    });

    afterEach(() => {
      subject.unmount();
    });

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<TodoList />, div);
    });

    it('should match snapshot', () => {
      const mountedComponent = mount(<TodoList />);
      expect(mountedComponent).toMatchSnapshot();
    });

    it('should add task', () => {
      const taskText = 'Test Task Text';

      subject 
        .find('.todo-list-header form input[type="text"]')
        .simulate('change', {target: {value: taskText}});

      subject 
        .find('.todo-list-header form')
        .simulate('submit');

      const todoItem = subject.find('.todo-list-items li span').at(0);

      expect(todoItem).toBeDefined();
      expect(todoItem.text()).toBe(taskText);
    });
});
