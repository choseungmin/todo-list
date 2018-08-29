import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import PaletteList from './components/PaletteList';

class App extends Component {

    id = 3;
    state = {
        input: '',
        todos: [
            { id: 0, text: 'aaa', checked: false },
            { id: 1, text: 'bbb', checked: true },
            { id: 2, text: 'ccc', checked: false },
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
        const { input, todos } = this.state;
        this.setState({
            input: '', //input 비우고
            //concat 을 사용하여 배열 추가
            todos: todos.concat({
                id: this.id ++,
                text: input,
                checked: false
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
            todos: [
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
            todos: todos.filter(todo => todo.id !== id)
        });
    };


    render() {

        const { input, todos, colors }= this.state;
        const {
            handleChange,
            handleCreate,
            handleRemove,
            handleKeyPress,
            handleToggle
        } = this;

        return (
            <div className="App">
                <TodoListTemplate
                    form={(
                        <Form value={input} onKeyPress={handleKeyPress} onChange={handleChange} onCreate={handleCreate} />
                    )}
                    palette={(
                        <PaletteList colors={colors}/>
                    )}
                >
                    <TodoItemList
                        todos={todos}
                        onToggle={handleToggle}
                        onRemove={handleRemove}
                    />
                </TodoListTemplate>
            </div>
        );
    };
};

export default App;
