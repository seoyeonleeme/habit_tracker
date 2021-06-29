import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';


class Habits extends Component {
    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    }

    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    }

    handleDelete = (habit) => {
        this.props.onDelete(habit);
    }

    handleAdd = (name) => {
        this.props.onAdd(name);
    }

    render() {
        return (
            <div className="habits">
                <HabitAddForm onAdd={this.handleAdd} />
                <ul>
                    {this.props.habits.map(habit => (
                        <Habit key={habit.id} habit={habit} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} />
                    ))}
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
            </div>
        );
    }
} 

export default Habits;

/*
render에서 Habit 컴포넌트에 habit이라는 오브젝트를 전달함
habit이라는 prop이름에 habit이라는 데이터를 {habit}에 전달해주는 것

prop key: key안에 habit안에 있는 id를 지정해주면 됨
<Habit key={habit.id} habit={habit} />  
*/