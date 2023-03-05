import React, { Fragment, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './styles.css';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './loadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {activityStore} = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])


  if(activityStore.loadingInitial) return <LoadingComponent content='loading app' />

  return (
    <Fragment>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard/>
      </Container>
    </Fragment>
  );
}

export default observer(App);
