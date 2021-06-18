import React,{useState,useEffect} from 'react'
import "./App.css";
import { Routes } from "./Routes/Routes";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="h6" color="primary" size="large">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '30%',
    marginLeft:'35%',
    position: 'absolute',
    marginTop:'20%'
  },
});

function App() {
  const [loading,setLoading]=useState(false)
  const classes = useStyles();
  const [progress, setProgress] = React.useState(10);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },500)

    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 600);
    return ()=>{
      clearInterval(timer);
    }

  },[])
  return (  
        <div className={loading ? "second" :"App"}>
            {
              loading ? 
              <div className={classes.root}>
                
              <LinearProgressWithLabel value={progress} />
              </div>
              :
              <Routes/>
            }
      </div>
  );
}

export default App;
