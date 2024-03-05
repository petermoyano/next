const names = ['John', 'Paul', 'George', 'Ringo'];
export default function Post() {
   const name = names[Math.floor(Math.random() * 4)]
    return (
        <div>
            <h1>{name}</h1>
            <p>Post body</p>
        </div>
    );
}
