

const Task = () => {
    return (
        <div class="task" id="1" style={{background: 'rgb(34, 176, 176)'}} >
                        <div class="header">
                            <span class="date">2021-05-20 - 13:06</span>
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </div>
                        <div class="body">
                            <h3 class="title">Task 1</h3>
                            <p class="descripcion">Description 1</p>
                        </div>
                        <div class="footer">
                            <div class="etiquetas">
                                <div class="etiqueta">
                                    <img class="icon-delete" src="assets/img/home.png" alt="" />
                                </div>
                            </div>
                            <button class="btn-delete">
                                <img class="icon-delete" src="assets/img/delete.png" alt="" />
                            </button>
                        </div>
                </div>
    )
}

export default Task
