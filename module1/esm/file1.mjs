//  export(module.exports) and import----> (require)

const a = 10;
const add = (x, y) => x * y;
const user = {
    name: "nayeem",
    email: "nayeem@gmail.com",
    id: 12
};
export {
    a,
    add
};
export default user;