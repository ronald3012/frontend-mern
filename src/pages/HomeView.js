import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../componets/Header';
import Modal from '../componets/modal';
import TasksList from '../componets/TasksList';

const HomeView = props => {

    const {visible:showModal} = useSelector(store=>store.modalReducer);

    return (
        <>
            <section>
                <Header />
                <TasksList />
            </section>
            {showModal && <Modal />}
        </>
    )
}

export default HomeView;
