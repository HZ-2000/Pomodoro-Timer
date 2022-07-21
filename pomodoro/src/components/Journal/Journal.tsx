import React, {useState} from 'react';
import { List, arrayMove } from 'react-movable';
import './Journal.css';


export function Journal() {
    const [curr_entry, setEntry] = useState("");
    const [items, setItems] = useState<string[]>([]);


    const handleSubmit = (event:any) => {
        event.preventDefault();
        setItems(arr => [...arr, curr_entry]);
    }

    return (
        <div id="App">
            <h1>Journal</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type='text' onChange={(e) => setEntry(e.target.value)}/>
                    <input type="submit" value='stuff'/>
                </form>
            </div>
            <div id='Journal'>
            <List
                values={items}
                onChange={({ oldIndex, newIndex }) =>
                    setItems(arrayMove(items, oldIndex, newIndex))
                }
                renderList={({ children, props }) => <ul {...props}>{children}</ul>}
                renderItem={({ value, props }) => <li {...props}>{value}</li>}
                />
            </div>
        </div>
    );
}
