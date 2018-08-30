import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import PaletteList from './components/PaletteList';

import PaletteListContainers from './containers/PaletteListContainer';
import TodoItemListContainers from './containers/TodoItemListContainer';

class App extends Component {

    id = 3;
    state = {
        input: '',
        todos: [
            { id: 0, text: 'aaa', checked: false, color: '#343a40' },
            { id: 1, text: 'bbb', checked: true, color: '#343a40' },
            { id: 2, text: 'ccc', checked: false, color: '#12b886' },
        ],
        colors: [
            {color: '#343a40', checked: true},
            {color: '#f03e3e', checked: false},
            {color: '#12b886', checked: false},
            {color: '#228ae6', checked: false}
        ]
    };

    handleChange = (e) => {
        this.setState({
            input: e.target.value //input의 다음 바뀔 값
        });
    };

    handleCreate = () => {
        const { input, todos, colors } = this.state;

        const { color } = colors.find(
            (item) => {
                if(item.checked) {
                    return item
                }
            }
        );

        this.setState({
            input: '', //input 비우고
            //concat 을 사용하여 배열 추가
            todoState: todos.concat({
                id: this.id ++,
                text: input,
                checked: false,
                color: color
            })
        });
    };

    handleKeyPress = (e) => {
        //눌려진 키가 Enter 면 handleCreate 호출
        if(e.key === 'Enter') {
            this.handleCreate();
        };
    };

    handleToggle = (id) => {
        const { todos } = this.state;

        // 파라미터로 받은 id를 가지고 몇번째인지 찾기
        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index]; //선택한 객체

        this.setState({
            todoState: [
                ...todos.slice(0, index),
                {
                    ...selected,
                    checked: !selected.checked
                },
                ...todos.slice(index+1, todos.length)
            ]
        });
    };

    handleRemove = (id) => {
        const { todos } = this.state;
        this.setState({
            todoState: todos.filter(todo => todo.id !== id)
        });
    };

    handleColor = (selColor) => {
        const { colors } = this.state;

        this.setState({
            colors: colors.map(
                (item) => {
                    return {
                        color: item.color,
                        checked: (item.color === selColor)
                    }
                }
            )
        })
    };


    render() {

        const { input, todos, colors }= this.state;
        const {
            handleChange,
            handleCreate,
            handleRemove,
            handleKeyPress,
            handleToggle,
            handleColor
        } = this;

        const { color } = colors.find(
            (item) => {
                if(item.checked === true)
                    return item.color
            }
        );

        return (
            <div className="App">
                <TodoListTemplate
                    form={(
                        <Form
                            value={input}
                            onKeyPress={handleKeyPress}
                            onChange={handleChange}
                            onCreate={handleCreate}
                            color={color}
                        />
                    )}
                    palette={(
                        <PaletteListContainers/>
                    )}
                >
                    {/*<TodoItemList
                        todos={todos}
                        onToggle={handleToggle}
                        onRemove={handleRemove}
                    />*/}
                    <TodoItemListContainers/>
                </TodoListTemplate>
            </div>
        );
    };
};

export default App;
