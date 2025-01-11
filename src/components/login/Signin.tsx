"use client";

import React, { useState } from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import { Alert, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

import { DEFAULT_EMAIL, DEFAULT_PASSWORD } from "../../utils/constants";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [logging, setLogging] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (email === DEFAULT_EMAIL && password === DEFAULT_PASSWORD) {
      setLogging(true);
      setError("");
      router.push("/dashboard");
    } else {
      setLogging(false);
      setError("Wrong credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md border border-blue-500">
        <Typography variant="h5" className="text-center mb-6 text-slate-800">
          Welcome to your awesome dashboard
        </Typography>
        <Typography className="text-center mb-6 text-gray-600">
          Sign in to continue
        </Typography>

        <form onSubmit={handleSubmit} className="space-y-4 ">
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 rounded-md"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 rounded-md border "
          />
          {error && (
            <Alert severity="error" className="mb-4">
              {error}
            </Alert>
          )}
          {!logging && (
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
            >
              Login
            </Button>
          )}
          {logging && <LoadingButton loading fullWidth />}
        </form>
      </div>
    </div>
  );
}
