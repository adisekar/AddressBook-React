import ContactList from './ContactList';

function App() {
  return (
    <div className='container-fluid'>
      <nav className='navbar fixed-top navbar-dark bg-dark'>
        <div class="navbar-header">
          <div className='navbar-brand'>Address Book</div>
        </div>
      </nav>
      <div className='content'>
        <ContactList />
      </div>
    </div>
  );
}

export default App;
