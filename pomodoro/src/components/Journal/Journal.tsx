import React, {useState} from 'react';
import { List, arrayMove, arrayRemove } from 'react-movable';
import './Journal.css';


export function Journal() {
    const [curr_entry, setEntry] = useState("");
    const [items, setItems] = useState<string[]>([]);


    const handleSubmit = (event:any) => {
        event.preventDefault();
        setItems(arr => [...arr, curr_entry]);
    }

    return (
        <div id='Journal'>
            <h1 id='journalTitle'>journal</h1>
            <div>
                <form id='JournalCreate' onSubmit={handleSubmit}>
                    <input id='inputText' type='text' placeholder='task to complete' onChange={(e) => setEntry(e.target.value)}/>
                    <input id='submit' type="submit" value='  +  '/>
                </form>
            </div>
            <List
                values={items}
                onChange={({ oldIndex, newIndex }) =>
                    setItems(arrayMove(items, oldIndex, newIndex))
                }
                renderList={({ children, props }) => <ul {...props}>{children}</ul>}
                renderItem={({ value, props, index }) => <li {...props}>
                    {value} <button
                                onClick={() => {
                                setItems(
                                    typeof index !== 'undefined'
                                    ? arrayRemove(items, index)
                                    : items
                                );
                                }}
                            >complete</button>
                    </li>}
                />
        </div>
    );
}
