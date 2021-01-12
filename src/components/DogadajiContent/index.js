import React, { memo, useCallback, useState, useEffect } from 'react'
import TextField from "@material-ui/core/TextField"
import eventsList from "../../data/dogadaji.json"
import ButtonToggle from '@material-ui/lab/ToggleButton'
import './style.module.css'
import styles from './style.module.css'

const DogadajiContent = memo(({ fetchData }) => {
  const [items, setItems] = React.useState(eventsList);
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

    if (searchText.length > 0 && !`${item.title}${item.description}`.includes(searchText))
      return false;
    
    return true;
  }).map((item, i) => <li>{item.title} <br/><span>{item.description}</span></li>);
  
  return <>
    <div className={styles.textfield}>
      <TextField
        id="item-search"
        label="Pretraživanje"
        variant="outlined"
        value={searchText}
        size="small"
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
    <ButtonToggle 
      className={styles.button}
      togglable={true}
      selected={filter.has("Sport")}
      onClick={() => filterClick("Sport")}
    >
      Sport
    </ButtonToggle>
    <ButtonToggle
      className={styles.button}
      togglable={true}
      selected={filter.has("Kultura")}
      onClick={(e) => filterClick("Kultura")}

    >
      Kultura
    </ButtonToggle>
    <ButtonToggle
      className={styles.button}
      togglable={true}
      selected={filter.has("Druženja")}
      onClick={(e) => filterClick("Druženja")}
    >
      Druženja
    </ButtonToggle>
       <ButtonToggle
      className={styles.button}
      togglable={true}
      selected={filter.has("Koncerti")}
      onClick={(e) => filterClick("Koncerti")}
    >
      Koncerti
    </ButtonToggle>
    <ButtonToggle
      className={styles.button}
      togglable={true}
      selected={filter.has("Radna akcija")}
      onClick={(e) => filterClick("Radna akcija")}
    >
      Radne akcije
    </ButtonToggle>
    <div>
      <ul>
         {filteredItems}
      </ul>
    </div>
  </>
})

export default DogadajiContent


