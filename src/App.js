const App = () => {
  const getMessage = () => {};

  return (
    <div className='app'>
      <section className='side-bar'>
        <button>+ New chat</button>
        <ul className='history'></ul>
        <nav>
          <p>Made by Giorgio</p>
        </nav>
      </section>
      <section className='main'>
        <h1>TowerGPT</h1>
        <ul className='feed'></ul>
        <div className='bottom-section'>
          <div className='input-container'>
            <input />
            <div id='submit' onClick={getMessage}>
              ➢
            </div>
          </div>
          <p className='info'>
            TowerGPT can make mistakes. Consider checking important information.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
