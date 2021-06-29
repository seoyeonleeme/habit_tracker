import React, { memo, PureComponent } from 'react';

const HabitAddForm = memo(props => {
    const inputRef = React.createRef(); //ref라는 오브젝트 생성하는 함수
    const formRef = React.createRef();

    const onSubmit = (event) => {
        event.preventDefault(); //브라우저 refresh막음
        const name = inputRef.current.value;
        name && props.onAdd(name); //name이 있다면 props에 전달된 onAdd라는 함수에 name 전달
        //inputRef.current.value = '';
        formRef.current.reset(); //이게 정석
    };

    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className="add-input" placeholder="Habit" />
            <button className="add-button">Add</button>
        </form>
    );
});

export default HabitAddForm;

/*
React는 JS와 다르게 Dom요소에 바로 접근 불가(documentquerySeletor)
React.createRef()함수를 이용해서
멤버 변수 정의하고 나서, 해당하는 컴포넌트에 ref로 연결
(value나 click event 등록하는 법 유사함)
*/

/*
class HabitAddForm extends PureComponent {
    inputRef = React.createRef(); //ref라는 오브젝트 생성하는 함수
    formRef = React.createRef();

    onSubmit = (event) => {
        event.preventDefault(); //브라우저 refresh막음
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name); //name이 있다면 props에 전달된 onAdd라는 함수에 name 전달
        //this.inputRef.current.value = '';
        this.formRef.current.reset(); //이게 정석
    };
    
    render() {
        console.log('habitAddForm');
        return (
            <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit" />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;
*/