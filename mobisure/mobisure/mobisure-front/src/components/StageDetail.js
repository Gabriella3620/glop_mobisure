import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import stageService from '../services/stageService';

const StageDetail = () => {
  const { id } = useParams();
  const [stage, setStage] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    if (id) {
      stageService.getStageById(id)
        .then(response => {
          setStage(response.data);
          setLoading(false); 
        })
        .catch(error => {
          console.error('Error retrieving stage:', error);
          setLoading(false); 
        });
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!stage) {
    return <p>Error loading stage details.</p>;
  }

  return (
    <div className="container mt-4">
      <h2>Stage Details</h2>
      <p><strong>Title:</strong> {stage.title}</p>
      <p><strong>Description:</strong> {stage.description}</p>
      <p><strong>Start Date:</strong> {stage.dateDebut}</p>
      <p><strong>End Date:</strong> {stage.dateFin}</p>
    </div>
  );
};

export default StageDetail;
