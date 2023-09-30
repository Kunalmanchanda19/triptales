'use client '
import React, { useState, ChangeEvent, FormEvent } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

interface Message {
  text: string;
  type: 'user' | 'bot';
}

export default function Chatbot() {

  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>('');

  const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userInput.trim() === '') return;

    // Add the user's message to the chat
    setMessages([...messages, { text: userInput, type: 'user' }]);
    setUserInput('');

    // Simulate a response from the chatbot (you can replace this with actual chatbot logic)
    setTimeout(() => {
      setMessages([...messages, { text: 'This is a chatbot response.', type: 'bot' }]);
    }, 1000);
  };

  return (
    <Grid container justifyContent='center' alignItems='center'  sx={{height:300,border:2,width:'100%', marginTop:20,textAlign:'center'}}>
    <Grid item xs={12}>
      <Typography variant="h3" gutterBottom>
        Chatbot
      </Typography>
    </Grid>
    
    <Grid item xs={12}>
      <form onSubmit={handleSubmit} className="input-form">
        <TextField
          label="Type a message..."
          variant="outlined"
          fullWidth
          value={userInput}
          onChange={handleUserInput}
          sx={{width:'80%'}}
        />
        <Button type="submit" variant="contained" color="primary" sx={{width:'30%',marginTop:2}}>
          Send
        </Button>
        <Grid item xs={12} className="chat-messages" >
      {messages.map((message, index) => (
        <Typography variant='h6'key={index} className={`message ${message.type}`}>
          {message.text}
        </Typography>
      ))}
    </Grid>
      </form>
    </Grid>
  </Grid>
  
  );
}


