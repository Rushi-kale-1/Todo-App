const zod = require("zod")
/*

 */

const createTodo = zod.object({
    title: zod.string(),
    description:zod.string(),
    completed:zod.boolean()
})
const updateTodo = zod.object({
    id:zod.string()
})

const signupIn = zod.object({
    username: zod.string().min(1),
    password: zod.string().min(1)
})

module.exports = {
    createTodo, updateTodo,signupIn
}