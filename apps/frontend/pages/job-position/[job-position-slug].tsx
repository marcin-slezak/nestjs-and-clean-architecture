import React, {useEffect, useState} from 'react';
import {ApplicationForm} from '../../components/ApplicationForm'
import {Layout} from '../../components/Layout'
import Paper from '@mui/material/Paper'
type JobPosition = {
  id: number;
  title: string;
  slug: string;
}

type JobPositionPorops = {
  jobPosition: JobPosition
}

export function JobPosition({jobPosition}:JobPositionPorops) {
  
  return (
    <Layout>
      <h2>{jobPosition.title}</h2>
      <Paper elevation={1} sx={{pt:3, pl:5, pr:5, pb:5}}>
        <h3>Application form</h3>
        <ApplicationForm onSubmit={values => console.log({values})}/>
      </Paper>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(`${process.env.BACKEND_API}/job-positions`)
  const payload = await response.json()
  const jobPosition = payload?.jobPositions?.find(jp => jp.slug === context.params['job-position-slug'])
  if(!jobPosition){
    return {
      notFound: true,
    }
  }
  return {
    props: {jobPosition},
  }
}

export default JobPosition;
