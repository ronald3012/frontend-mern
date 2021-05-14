import React from 'react';
import Header from '../componets/Header';
import TasksList from '../componets/TasksList';

const HomeView = props => {
    return (
        <section>
            <Header />
            <TasksList />
        </section>
    )
}

export default HomeView;
