const url = 'http://localhost:3030/jsonstore/todos'

export const useApi = () => {

    const delTodo = (todoId) => {
        //return promise for delete
        return fetch(`${url}/${todoId}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
    };

    const createTodo = (title)=>{
        return  fetch(`${url}/${todoId}`, {
            method: 'POST',
        })
            .then(res => res.json())
    }

    return {
        delTodo: delTodo,
        createTodo: createTodo,
    }
}