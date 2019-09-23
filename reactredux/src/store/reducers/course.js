const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [

        {
            id: 1, title: '1 - Iniciando com React', lessons: [
                { id: 1, title: 'O que é o ReactJS?' },
                { id: 2, title: 'Props e States' },
            ]
        },
        {
            id: 2, title: '2 - Ciclos de vida de um comopnente', lessons: [
                {
                    id: 3,
                    title: 'ComponentDidMount()'
                },
                { id: 4, title: 'Render()' },
            ]
        }

    ]
}
export default function course(state = INITIAL_STATE, action) {
    if (action.type === 'TOGGLE_LESSON') {
        return {
            ...state,
            activeLesson: action.lesson,
            activeModule: action.module
        }
    }
    return state;
}