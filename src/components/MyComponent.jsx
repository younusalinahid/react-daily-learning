import { useEffect, useState  } from "react";

export default function MyComponent() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    // const [text, setText] = useState('');

    const tick = () => {
        setDate(new Date());
    };

    useEffect(() => {
        console.log("updating document title")
        document.title = `Clicked ${count} times`;
    }, [count]);

    useEffect(() => {
        console.log("Starting Timer")
        setInterval(tick, 1000);
    }, []);

    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
            <div>
                <p>
                    <input type="text" value={date} onChange={(e) => setText(e.target.value)} />
                    {/* Time: {date.toLocaleDateString()} */}
                </p>
                <button type="button" onClick={addClick}>Click</button>
            </div>
        )

}