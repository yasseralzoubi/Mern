import Person from "./components/Person"

const App =() => {
    return (
        <>
            <Person firstName="Bill" lastName="Justice" age={32} hairColor="purple" />  
            <Person firstName="Alice" lastName="Smith" age={28} hairColor="blonde" />  
        </>

    )
}
export default App