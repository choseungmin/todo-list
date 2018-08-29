import * as types from '../actions/ActionTypes';

//초기 상태
const initialState = {
    todos: [
        {text: 'hello world1'},
        {text: 'hello world2'}
    ]
};

//리듀서 함수 정의
function todo(state = initialState, action) {
    //래퍼런스 생성
    const todos = state;

    switch (action.type) {
        case types.CREATE:
            return {
                todos: [
                    ...todos,
                    {text: action.text}
                ]
            };
        case default:
            return state;
    }
}