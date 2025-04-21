const List = ({arr=[], color:listColor}) => {
    const ulStyle = {
        background: listColor,
        fontStyle: `italic`
    }

    return arr.length ? <ul style={ ulStyle } className="list">
        {arr.map((item, index) => <li key={index}>{item}</li>)}
    </ul> : null;
}