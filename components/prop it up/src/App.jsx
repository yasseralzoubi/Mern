import Person from "./components/Person"

const App =() => {
    return (
        <>
            <Person firstName="Bill" lastName="Justice" age={32} hairColor="purple" />  
            <Person firstName="Alice" lastName="Smith" age={28} hairColor="blonde" />  
            <Person firstName="John" lastName="Doe" age={45} hairColor="brown" />  
            <Person firstName="Emma" lastName="Johnson" age={30} hairColor="red" /> 
        </>

    )
}
export default App