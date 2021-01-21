import React, { memo} from 'react'
import TextField from "@material-ui/core/TextField"
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import eventsList from "../../data/dogadaji.json"
import ButtonToggle from '@material-ui/lab/ToggleButton'
import { makeStyles } from "@material-ui/core";
import DogadajImage from "../DogadajImage"
import styles from './style.module.css'

const useStyles = makeStyles({
  buttonColors: {
    "&.MuiToggleButton-root":{
      borderRadius: "30px",
      borderColor:'#2e3687',
      color:'#2e3687',
      padding: '7px 15px',
      margin: '10px 10px 10px 0px',
      height:'28px',
      fontSize: '12px',
      fontFamily: 'sans-serif',
      letterSpacing: '0.18em',
      "@media screen and (max-width: 768px)" :{
        margin: "2px",
        padding: '7px 12px',
        height:'23px',
        fontSize: '8px',
        lineHeight: '0.5rem'
      }
      
    },
    "&.MuiToggleButton-label":{
      spacing: '0px',
    },
    "&.Mui-selected": {
      backgroundColor: '#e4e8f4',
      margin: '10px 10px 10px 0px',
    },
    "&.Mui-selected:hover": {
      backgroundColor: 'transparent'
    },
    "&.Mui-selected:active": {
      backgroundColor: 'transparent'
    },
    "&:hover": {
      backgroundColor: '#e4e8f4'
    },
    "&:active": {
      backgroundColor: '#e4e8f4'
    }
  }

});

const DogadajiContent = memo(({ fetchData }) => {
  const classes = useStyles();
  const [items] = React.useState(eventsList);
  const [searchText, setSearchText] = React.useState("");
  const [filter, setFilter] = React.useState(new Set());

  const handleInputChange = (value) => {
    setSearchText(value);
    console.log(searchText)
  };

  const filterClick = (value) => {
    if (filter.has(value)) {
      setFilter(prevFilter => {
        const newSet = new Set(prevFilter);
        newSet.delete(value);
        return newSet;
      });
    } else {
       setFilter(prevFilter => {
        const newSet = new Set(prevFilter);
        newSet.add(value);
        return newSet;
      });
    }
  };


  let filteredItems = items.filter(item => {
    if (filter.size > 0 && !filter.has(item.type))
      return false;

    if (searchText.length > 0 && !`${item.title.toLowerCase()}${item.description}`.includes(searchText))
      return false;
    
    return true;
  }).map((item, i) => <div key={i} className={styles.container} >
    <div className={styles.container2}>
    <div className={styles.cardMedia}>
      <div className={styles.cardMediaObjectContainer}>
        <DogadajImage
           className={styles.image}
           filename={item.image.src}
        />
      </div>
      <div className={styles.cardMediaBody}>
        
        <span className={styles.subtle}>{item.date}</span>
        <span className={styles.cardMediaBodyHeading}>{item.title}</span>
        <div className={styles.cardMediaBodyBottom}>
        <span className={styles.subtle}>{item.place}</span>
        </div>
        <div className={styles.overlay}>
          <span className={styles.subtle}>{item.description}</span>
        </div>

    </div>
    </div>
    </div>
    </div>

  );
   
  
  return <>
    <div className = {styles.background}>
      <div className={styles.textfield}>
        <TextField
          id="item-search"
          label="Pretraživanje"
          variant="standard"
          InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon  className={styles.CustomInput}>search</SearchIcon>
              </IconButton>
            </InputAdornment>
          )    }}
      
          value={searchText}
          size="small"
          onChange={(e) => handleInputChange(e.target.value)}
        />
      </div>
      <div className={styles.buttonContainer}>  
        <ButtonToggle 
          className={classes.buttonColors}
          //togglable={true}
          
          selected={filter.has("Sport")}
          onClick={() => filterClick("Sport")}
        >
          Sport
        </ButtonToggle>
        <ButtonToggle
          className={classes.buttonColors}
          //togglable={true}
          selected={filter.has("Kultura")}
          onClick={(e) => filterClick("Kultura")}

        >
          Kultura
        </ButtonToggle>
        <ButtonToggle
          className={classes.buttonColors}
          //togglable={true}
          selected={filter.has("Druženja")}
          onClick={(e) => filterClick("Druženja")}
        >
          Druženja
        </ButtonToggle>
          <ButtonToggle
          className={classes.buttonColors}
          //togglable={true}
          selected={filter.has("Koncerti")}
          onClick={(e) => filterClick("Koncerti")}
        >
          Koncerti
        </ButtonToggle>
        <ButtonToggle
          className={classes.buttonColors}
          //togglable={true}
          selected={filter.has("Radna akcija")}
          onClick={(e) => filterClick("Radna akcija")}
        >
          Radne akcije
        </ButtonToggle>
      </div>
      <div className={styles.filter}>
        {filteredItems}
      </div>
    </div>
  </>
})

export default DogadajiContent


