let group = {
    title: 'Java Ashkelon 2020',
    students: ['Anna', 'Anna', 'Elena', 'Irina', 'Yuliia', 'Irina', 'Elina'],
    showList: function () {
        const show = (name) => {
            console.log(`${this.title}: ${name}`);
        }
        this.students.forEach(show)
    }
}
// код внизу менять нельзя
group.showList()
let newGroup = group
group = null
console.log('=============');
newGroup.showList()