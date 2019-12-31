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

    const addTaskToSubject = (taskText: string) => {
      subject 
        .find('.todo-list-header form input[type="text"]')
        .simulate('change', {target: {value: taskText}});

      subject 
        .find('.todo-list-header form')
        .simulate('submit');
    }

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<TodoList />, div);
    });

    it('should match snapshot', () => {
      const mountedComponent = mount(<TodoList />);
      expect(mountedComponent.debug()).toMatchSnapshot();
    });

    it('should add task', () => {
      const taskText = 'Test Task Text';

      addTaskToSubject(taskText);

      const todoItem = subject.find('.todo-list-items li span').at(0);

      expect(todoItem.exists()).toBeTruthy();
      expect(todoItem.text()).toBe(taskText);
    });

    it('should remove task', () => {
      window.confirm = jest.fn().mockImplementation(() => true);

      addTaskToSubject('Test Task');

      subject
        .find('.todo-list-items li a')
        .at(0)
        .simulate('click');

      const todoItem = subject.find('.todo-list-items li span').at(0);

      expect(todoItem.exists()).toBeFalsy();
    });

    it('should not remove task when user does not confirm action', () => {
      const taskText = 'Test Task Text';

      window.confirm = jest.fn().mockImplementation(() => false);

      addTaskToSubject(taskText);

      subject
        .find('.todo-list-items li a')
        .at(0)
        .simulate('click');

      const todoItem = subject.find('.todo-list-items li span').at(0);

      expect(todoItem.exists()).toBeTruthy();
      expect(todoItem.text()).toBe(taskText);
    });
});
