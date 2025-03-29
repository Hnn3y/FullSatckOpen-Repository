const Header = ({ course }) => {
  return <h1>{course}</h1>;
}; 

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <p key={index}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  );
}; 



const App = () => {
  return (
    <div>
    <Header course ={course}/>
    </div>
  )
}

export default App