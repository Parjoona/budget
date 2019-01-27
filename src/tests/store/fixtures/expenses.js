import moment from 'moment'

export default [{
    note: 'when i bought something',
    amount: 1250,
    createdAt: moment(0).valueOf(),
    description: 'expense one',
    id: "1"
}, {
    note: 'when i bought something',
    amount: 10,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
    description: 'expense two',
    id: "2"
}, {
    note: 'when i bought something',
    amount: 40000,
    createdAt: moment(0).add(4, 'days').valueOf(),
    description: 'expense not four',
    id: "3"
}, {
    note: 'when i bought something',
    amount: 9999,
    createdAt: moment(0).add(5, 'days').valueOf(),
    description: 'expense four',
    id: "4"
}]