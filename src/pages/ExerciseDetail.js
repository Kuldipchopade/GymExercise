import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';
import ExerciseVideo from '../components/ExerciseVideo';
import SimilarExercises from '../components/SimilarExercises';
import { exerciseOption, fetchData, youtubeOptions } from "../utils/fetchData"

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideo, setExerciseVideo] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmemtExercises, setEquipmemtExercises] = useState([]);

  const { id } = useParams()

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com"
      const youtubesearchURL = "https://youtube-search-and-download.p.rapidapi.com"
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOption)
      setExerciseDetail(exerciseDetailData)
      const exerciseVideosData = await fetchData(`${youtubesearchURL}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideo(exerciseVideosData.contents);

      const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOption)
      setTargetMuscleExercises(targetMuscleExerciseData)
      const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOption)
      setEquipmemtExercises(equipmentExerciseData)
    }
    fetchExercisesData()
  }, [id])
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo exerciseVideo={exerciseVideo} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmemtExercises={equipmemtExercises} />
    </Box>
  )
}

export default ExerciseDetail;