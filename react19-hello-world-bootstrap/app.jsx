import { createRoot } from 'react-dom/client';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('World');

  // React 19's new "action" API (simplified form handling)
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setName(formData.get('name') || 'World');
  };

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <form action={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Enter your name" 
          defaultValue={name} 
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);