<template>
    <div>
        <div>
            <h4>Parent data list</h4>
            <div v-for="(task, index) in journal.tasks" :key="'task-key-parent-'+index">
                {{task.description}}
            </div>
        </div>
        <template v-if="journal.tasks.length !== 0">
            <div v-for="(task, index) in journal.tasks" :key="'task-key-'+index">
                <todo-task :inputData.sync="task.description" v-if="task.status === 'todo'"></todo-task>
                <done-task :inputData.sync="task.description" v-if="task.status === 'done'"></done-task>
            </div>
        </template>
        <template v-else>
            <todo-task>An example of a todo task</todo-task>
            <done-task>An example of a done task</done-task>
        </template>
    </div>
</template>
<script>
    import TodoTask from "./Tasks/Todo";
    import DoneTask from "./Tasks/Done";
    export default {
        name: 'journal',
        data() {
            return {
                journal: {
                    tasks: [
                        {
                            status: "todo",
                            description: "Lorem ispum"
                        },
                        {
                            status: "done",
                            description: "Lorem ispum done"
                        },
                        {
                            status: "todo",
                            description: "Lorem ispum 2"
                        },
                        {
                            status: "done",
                            description: "Lorem ispum done 2"
                        },
                        {
                            status: "todo",
                            description: "Lorem ispum 3"
                        },
                        {
                            status: "done",
                            description: "Lorem ispum done 3"
                        }
                    ]
                }
            }
        },
        components: {
            TodoTask,
            DoneTask,
        },
        // Shortened the rest of it as nothing changed
    }
</script>