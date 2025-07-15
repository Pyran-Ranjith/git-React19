import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [name, setName] = useState('World');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newName = formData.get('name');
    setName(newName || 'World');
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body text-center">
          <h1 className="display-4 text-primary">Hello, {name}!</h1>
          
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                defaultValue={name}
                key={name}  // Important: Force re-render on change
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update Greeting
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;