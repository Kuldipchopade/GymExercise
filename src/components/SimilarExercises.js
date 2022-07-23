import React from 'react'
import { Box, Typography, Stack } from "@mui/material"
import Loader from './Loader';
import HorizontalScrollbar from "../components/HorizontalScrollbar"
const SimilarExercises = ({ targetMuscleExercises, equipmemtExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relatives" }}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </Stack>


      <Typography variant="h3" mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relatives" }}>
        {equipmemtExercises.length ? <HorizontalScrollbar data={equipmemtExercises} /> : <Loader />}
      </Stack>

      {/* <Typography variant="h3" mb={5}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relatives" }}>
        {equipmemtExercises.length ? <HorizontalScrollbar data={equipmemtExercises} /> : <Loader />}
      </Stack> */}
    </Box>
  )
}

export default SimilarExercises;