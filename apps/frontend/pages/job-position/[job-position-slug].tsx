import React, {useEffect, useState} from 'react';
import {ApplicationForm} from '../../components/ApplicationForm'
import {Layout} from '../../components/Layout'
import Paper from '@mui/material/Paper'
import Alert from '@mui/material/Alert';

type JobPosition = {
  id: number;
  title: string;
  slug: string;
}

type JobPositionPorops = {
  jobPosition: JobPosition
}

type AddApplicationParams = {
  email:string
  firstName:string
  lastName: string
}

export function JobPosition({jobPosition}:JobPositionPorops) {
  const [error, setError] = useState<null | Error>(null)
  const [applicationAdded, setApplicationAdded] = useState<null | string>(null)
  const addApplication = async ({email, firstName, lastName}:AddApplicationParams): Promise<void> => {
    const payload = {
      firstName,
      lastName,
      email,
      jobPositionId: +jobPosition.id
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/application`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })

    if(response.status !== 201){
      setError(new Error('Could not add application, please try again'))
      return
    }

    setApplicationAdded('Thank you, application was added.')
    
  }
  
  return (
    <Layout>
      <h2>{jobPosition.title}</h2>
      {error ? <Alert severity="error">{error.toString()}</Alert>:null}
      {applicationAdded ? <Alert severity="success">{applicationAdded}</Alert> : (
      <Paper elevation={1} sx={{pt:3, pl:5, pr:5, pb:5}}>
        <h3>Application form</h3>
        <ApplicationForm onSubmit={addApplication}/>
      </Paper>
      )}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/job-positions`)
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
