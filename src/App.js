import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import PaletteList from './components/PaletteList'


class App extends Component {

    id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

    state = {
        input: '',
        todos: [
            { id: 0, text: ' 리액트 소개', checked: false, color: '#343a40' },
            { id: 1, text: ' 리액트 소개', checked: true, color: '#343a40' },
            { id: 2, text: ' 리액트 소개', checked: false, color: '#343a40' }
        ],
        colors: [
            { color: '#343a40', checked: true },
            { color: '#f03e3e', checked: false },
            { color: '#12b886', checked: false },
            { color: '#228ae6', checked: false }
        ]
    };

    handleChange = (e) => {
        this.setState({
            input: e.target.value // input 의 다음 바뀔 값
        });
    };

    handleCreate = () => {
        const { input, todos, colors } = this.state;
        const color = colors.find(color => color.checked===true);

        this.setState({
            input: '', // 인풋 비우고
            // concat 을 사용하여 배열에 추가
            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false,
                color: color.color
            })
        });
    };

    handleKeyPress = (e) => {
        // 눌려진 키가 Enter 면 handleCreate 호출
        if(e.key === 'Enter') {
            this.handleCreate();
        }
    };

    handleToggle = (id) => {
        const { todos } = this.state;

        // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index]; //선택한 객체

        const nextTodos = [...todos]; //배열을 복사

        // 기존의 값들을 복사하고, checked 값을 덮어쓰기
        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        };

        this.setState({
            todos: nextTodos
        });
    };

    handleRemove = (id) => {
        const { todos } = this.state;
        this.setState({
            todos: todos.filter(todo => todo.id !== id)
        });
    };

    handleColor = (color) => {
        const {colors} = this.state;
        const index = colors.findIndex(color => color.color === color);

        const nextColors = colors.map((nextColor, index) => {
            return ({...nextColor, checked:nextColor.color===color?true:false})
        });

        this.setState({
            colors: [...nextColors]
        });
    };

    render() {
        const { input, todos, colors } = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle,
            handleRemove,
            handleColor
        } = this;

        return (
            <TodoListTemplate
                form={(
                    <Form
                        value={input}
                        onKeyPress={handleKeyPress}
                        onChange={handleChange}
                        onCreate={handleCreate}
                        colors={colors}
                    />
                )}
                colors={(
                    <PaletteList
                        colors={colors}
                        onColor={handleColor}
                    />
                )}
            >
                <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
            </TodoListTemplate>
        );
    };
};

export default App;