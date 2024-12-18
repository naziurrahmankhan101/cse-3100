<?php

namespace App\Http\Controllers;

use App\Services\AttendanceService;
use Illuminate\Http\Request;

class SessionController extends Controller
{
    protected $attendanceService;

    public function __construct(AttendanceService $attendanceService)
    {
        $this->attendanceService = $attendanceService;
    }

    // Get session data
    public function getSession(Request $request)
    {
        // Call the service to get the valid session
        $session = $this->attendanceService->getSession();

        if ($session) {
            return response()->json([
                'session' => $session,
            ]);
        } else {
            return response()->json([
                'message' => 'No active session found',
            ], 404);
        }
    }

    // Create a new session
    public function createSession(Request $request)
    {
        // You may want to validate the incoming request here
        $sessionData = $request->validate([
            'name' => 'required|string',
            'duration' => 'required|integer'
        ]);

        // Call the AttendanceService to create the session
        $session = $this->attendanceService->createSession($sessionData);

        return response()->json([
            'session' => $session,
            'message' => 'Session created successfully',
        ]);
    }

    // View all sessions
    public function viewSessions(Request $request)
    {
        $sessions = $this->attendanceService->getAllSessions();

        return response()->json([
            'sessions' => $sessions,
        ]);
    }

    // Submit attendance for a session
    public function submitAttendance(Request $request)
    {
        // Validate the incoming request
        $attendanceData = $request->validate([
            'session_id' => 'required|exists:sessions,id',
            'roll' => 'required|string',
        ]);

        // Call the AttendanceService to submit the attendance
        $attendance = $this->attendanceService->submitAttendance($attendanceData);

        return response()->json([
            'attendance' => $attendance,
            'message' => 'Attendance submitted successfully',
        ]);
    }
}
