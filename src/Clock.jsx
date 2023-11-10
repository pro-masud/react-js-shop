import './App.css';

function Clock({locale}){
    return(
        <h1 className='heading'>
            Hello World 
            <span className='text'>
                {new Date().toLocaleTimeString(locale)};
            </span>
        </h1>
    );
}

export default Clock;