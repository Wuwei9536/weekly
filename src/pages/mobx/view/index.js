import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import { Input, List, Card, Form } from 'antd';
import style from '../style/index.less';

@observer
class TodoList extends React.Component {
    @observable newTodoTitle = "";

    static propTypes = {
        store: PropTypes.shape({
            todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
            unfinishedTodoCount: PropTypes.number.isRequired,
            addTodo: PropTypes.func.isRequired,
            deleteTodo: PropTypes.func.isRequired
        }).isRequired
    }

    render() {
        const { store } = this.props;
        return (
            <Card
                className={style.main}
                title={
                    (
                        <Form layout="inline">
                            <Form.Item label="Todo:">
                                <Input
                                autoFocus
                                type="text"
                                className={style.input}
                                value={this.newTodoTitle}
                                onChange={this.handleInputChange}
                                onPressEnter={this.handleFormSubmit}
                                />
                            </Form.Item>
                            <Form.Item>
                            Tasks left:
                                {' '}
                                {store.unfinishedTodoCount}
                            </Form.Item>
                            weqwesasdas12311231231928479
                        </Form>
                    )
                }
            >
                {/* <Tabs>
                    <Tabs.TabPane key="tabs" tab="tabs">23123</Tabs.TabPane>
                </Tabs> */}
                {/* <List
                    itemLayout="vertical"
                    size="small"
                    dataSource={store.todos}
                    renderItem={
                        (item, index) => (
                            <List.Item>
                                <Todo todo={item} />
                            </List.Item>
                        )
                    }
                /> */}
            </Card>
      );
    }

    @action
    handleInputChange = (e) => {
        this.newTodoTitle = e.target.value;
    };

    @action
    handleDelete = (i) => {
        const { store } = this.props;
        store.deleteTodo(i);
    }

    @action
    handleFormSubmit = (e) => {
        const { store } = this.props;
        store.addTodo(this.newTodoTitle);
        this.newTodoTitle = "";
        e.preventDefault();
    };
}

export default TodoList;
