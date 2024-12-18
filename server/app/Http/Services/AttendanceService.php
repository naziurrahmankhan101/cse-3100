<?php

namespace App\Services;

use App\Models\Session;
use App\Models\Attendance;
use Carbon\Carbon;

class AttendanceService
{

    public function getSession()
    {
        // Get all sessions
        $sessions = Session::all();

        // Get the current time
        $currentTime = Carbon::now();

        foreach ($sessions as $session) {
            // Calculate the end time (createdAt + duration in minutes)
            $endTime = Carbon::parse($session->createdAt)->addMinutes($session->duration);

            // Check if the current time is within the session's valid range
            if ($currentTime->between(Carbon::parse($session->createdAt), $endTime)) {
                // Return the session if it is within the valid range
                return $session;
            }
        }

        // If no valid session is found, return null or you could throw an exception if needed
        return null;
    }

    // Create a new session
    public function createSession(array $data)
    {
        // Create a new session and return it
        return Session::create([
            'name' => $data['name'],
            'duration' => $data['duration'],
        ]);
    }

    // Get all sessions
    public function getAllSessions()
    {
        // Retrieve all sessions from the database
        return Session::all();
    }

    // Submit attendance
    public function submitAttendance(array $data)
    {
        // Insert attendance record into the database
        return Attendance::create([
            'session_id' => $data['session_id'],
            'roll' => $data['roll'],
        ]);
    }
}
