import React, { useState, useEffect } from "react"
import { TextField } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
//import useStyles from "../styles"
import { getMovies } from "../redux/feature/movieSlice"

function Search() {
  const [name, setName] = useState("spider")
  //const classes = useStyles()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovies(name))
  }, [name])
  return (
    <>
      {/* <h2 className={classes.title}>Movies Search APP</h2>
      <form className={classes.form} onSubmit={(e) => e.preventDefault()}> */}
      <h2>Movies Search APP</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          type='text'
          // fullWidth
          value={name}
          // sx={{ m: 1, width: "55ch" }}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </>
  )
}

export default Search
