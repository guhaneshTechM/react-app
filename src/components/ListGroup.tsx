function ListGroup() {
    const items = ['New York ', 'bengaluru', 'madurai', 'chennai']

    return (<><h1>List</h1><ul className="list-group">
        {items.map((item) => <li className="list-group-item" key={item} onClick={() => { console.log(item) }}>{item} </li>)}
    </ul></>);
}
export default ListGroup;