import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const GiftIdeas = () => {
  const [giftIdeas, setGiftIdeas] = useState([]);
  const [newIdea, setNewIdea] = useState('');

  // Function to add a new gift idea
  const addGiftIdea = () => {
    if (newIdea.trim() !== '') {
      setGiftIdeas([...giftIdeas, newIdea]);
      setNewIdea('');
    }
  };

  return (
    <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', marginTop: '20px' }}>
      <CardContent>
        <Typography variant="h5" component="div" style={{ marginBottom: '20px' }}>
          Gift Ideas
        </Typography>
        {/* Display gift ideas */}
        {giftIdeas.map((idea, index) => (
          <Typography key={index} style={{ fontSize: '14px' }}>
            {`${index + 1}. ${idea}`}
          </Typography>
        ))}
        {/* Form to add new gift ideas */}
        <form onSubmit={(e) => { e.preventDefault(); addGiftIdea(); }}>
          <TextField
            label="New Gift Idea"
            variant="outlined"
            fullWidth
            margin="normal"
            value={newIdea}
            onChange={(e) => setNewIdea(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary"style={{ width: '200x' }} >
            Add Gift Idea
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default GiftIdeas;
