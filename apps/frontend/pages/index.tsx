import { useState, useEffect } from 'react';
import styles from './index.module.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Layout } from '../components/Layout'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import ListItemButton from '@mui/material/ListItemButton';
import Paper from '@mui/material/Paper';

type JobPosition = {
  id: number;
  title: string;
  slug: string;
}

type IndexPorops = {
  jobPositions: JobPosition[] | null
}

export function Index({ jobPositions }: IndexPorops) {
  return (
    <Layout>
      <h2>Job Positions</h2>
      <Paper elevation={1}>
      {jobPositions?.length ? (
        <List dense>
          {jobPositions.map(position => (
            <ListItem key={position.id} >
              <ListItemButton component="a" href={`/job-position/${position.slug}`}>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText
                primary={position.title}
              />
              </ListItemButton>
            </ListItem>

          ))}
        </List>
      ) : (
        <h2>No job positions available</h2>
      )}
      </Paper>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(`${process.env.BACKEND_API}/job-positions`)
  const payload = await response.json()
  return {
    props: { jobPositions: (payload.jobPositions || null) },
  }
}

export default Index;
