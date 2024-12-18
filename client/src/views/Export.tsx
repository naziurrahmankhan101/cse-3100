import { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';

interface Attendance {}

interface Session {
  id: number;
  name: string;
  createdAt: string;
  attendances: Attendance[];
}

export default function Export() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [error, setError] = useState<string | null>();

  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(input);
    setError(null);
    setSessions([]);
  };

  const handleDownload = (id: number) => {
    console.log(id);
  };

  return (
    <div className="pt-4 d-flex flex-column align-items-center">
      {/* credentials */}
      <div className="w-lg-400">
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="text" autoComplete="username" placeholder="Enter username" name="username" value={input.username} onChange={handleChange} className="w-full text-center border-2" />
            <Form.Control autoComplete="current-password" type="password" placeholder="Enter password" name="password" value={input.password} onChange={handleChange} className="w-full mt-2 text-center border-2" />
            <div className="d-grid gap-2 mt-3">
              <Button variant="primary" onClick={handleSubmit}>
                View session
              </Button>
            </div>
          </Form.Group>
        </Form>
      </div>
      {/* sessions */}
      {sessions.length > 0 && (
        <div>
          <Table>
            <thead>
              <tr>
                <th>Session</th>
                <th>Created at</th>
                <th className="text-right">Export (csv)</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session) => (
                <tr key={session.id}>
                  <td>{session.name}</td>
                  <td>{session.createdAt}</td>
                  <td className="text-right">
                    <Button variant="link" className="text-primary hover:text-primary/80" onClick={() => handleDownload(session.id)}>
                      Download
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}

      <p className="fs-6 text-danger">{error}</p>
    </div>
  );
}
