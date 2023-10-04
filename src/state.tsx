import { signal, computed } from '@preact/signals'

export const count = signal({
    count: 0,
    name: 'Tim',
    todos: [
        { item: 'exercise', clear: true },
        { item: 'do the work', clear: false },
        { item: 'go to HEB', clear: false },
        { item: 'go to bed', clear: false },
    ]
});
export const countUp = () => count.value = {...count.value, count: count.value.count + 1};
export const countDown = () => count.value = {...count.value, count: count.value.count - 1};

export const double = computed(() => count.value.count * 2);
export const completedTodoCount = computed(() => count.value.todos.reduce((acc, curr) => acc + (curr.clear ? 1 : 0), 0));

export const checkTodo = (index: number) => {
    count.value = {...count.value, todo: count.value.todos.map((t, idx) => {
        if (index === idx) {
            t.clear = !t.clear
        }
        return t;
    })};
};