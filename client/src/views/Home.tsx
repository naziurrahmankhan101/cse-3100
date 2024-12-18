import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ApiClient from "../api";

const convertToHm = (seconds: number | undefined) => {
  if (!seconds) return "0";
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

interface SessionInfo {
  timeRemaining: number; // in seconds
  name: string;
}

const apiClient = new ApiClient();

export default function Home() {
  const [rollValue, setRollValue] = useState("");
  const [sessionInfo, setSessionInfo] = useState<SessionInfo | null>(null);

  useEffect(() => {
    // api call to get sessionInfo
    // 1 session will be running at a time
    const getSession = async () => {
      const session = await apiClient.getSession();
      console.log(session);

      setSessionInfo({
        timeRemaining: 120 * 60,
        name: "B2",
      });
    };

    getSession();
  }, []);

  // Decrement timeRemaining every second
  useEffect(() => {
    if (sessionInfo && sessionInfo.timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setSessionInfo((p) => {
        if (!p) return null;
        return {
          ...p,
          timeRemaining: p.timeRemaining - 1,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [sessionInfo?.timeRemaining]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRollValue(rollValue);
    // submit to API
  };

  return (
    <div className="pt-4 d-flex justify-content-around items-center">
      <div className="w-lg-400">
        <div className="text-center">
          <h2 className="text-sm font-medium text-muted-foreground mb-2">Session</h2>
          <p className="text-3xl font-light fs-4">{sessionInfo?.name}</p>
        </div>
        <div className="text-center">
          <h2 className="text-sm font-medium text-muted-foreground mb-2">Remaining</h2>
          <p className="text-3xl font-light fs-4">{convertToHm(sessionInfo?.timeRemaining)}</p>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="number" placeholder="Enter roll" value={rollValue} onChange={(e) => setRollValue(e.target.value)} className="w-full text-center border-2" />
          <div className="d-grid gap-2 mt-3">
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </Form.Group>
      </div>
    </div>
  );
}
