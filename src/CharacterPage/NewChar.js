import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Box from "@mui/material/Box";
import { Card, Container, Paper } from "@mui/material";
// import IconButton from "@mui/material/IconButton";
// import Input from "@mui/material/Input";
// import FilledInput from "@mui/material/FilledInput";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
// import FormHelperText from "@mui/material/FormHelperText";
// import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import CharacterChoices from "../Components/CharacterChoices";
// import get_character_choices from "../Functions/character_choices";
import useCharacter from "../hooks/useCharacter";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
// import ComboBox from "../ComboBox";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
// import WeaponSelect from "../Functions/weapons";
// import BasicTable from "../Functions/spell_table";
import Save from "@mui/icons-material/Save";
import WeaponSelect from "../Functions/weapons";

const NewChar = (props) => {
  const blank = Boolean(props.blank);
  const blank_character = {
    // amount: "",
    name: "",
    gender: "",
    level: "",
    race: "",
    _class: "",
    alignment: "",
    strength: "",
    dexterity: "",
    constitution: "",
    intelligence: "",
    wisdom: "",
    charisma: "",
    strBonus: "",
    liftBend: "",
    carryWeight: "",
    dexBonus: "",
    dodge: "",
    speed: "",
    conBonus: "",
    hitDice: "",
    saveThrow: "",
    intBonus: "",
    investBonus: "",
    profBonus: "",
    perceptBonus: "",
    insightBonus: "",
    wisBonus: "",
    charm: "",
    intimidate: "",
    chaBonus: "",
    eyeColor: "",
    hairColor: "",
    height: "",
    age: "",
    mainWeapon: "",
    startEquip: "",
  };

  let { character: saved_character } = useCharacter();
  const [character, set_character] = useState(blank_character);

  useEffect(() => {
    if (!blank) {
      set_character({ ...saved_character });
    }
  }, [saved_character]);
  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };
  console.log(character);

  return (
    <Container sx={{ paddingTop: "1rem" }} maxWidth={"md"}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper elevation={8}>
            <TextField
              fullWidth
              sx={{
                backgroundColor: "rgba(255,255,255,.95)",
                // border: "double",
                border: "groove 8px ",
              }}
              label=" - Character Name - "
              id="outlined-start-adornment"
              value={character.name}
              //disabled
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper elevation={8}>
            <TextField
              fullWidth
              sx={{
                backgroundColor: "rgba(255,255,255,.95)",
                border: "groove 8px ",
              }}
              label="-Gender-"
              id="outlined-start-adornment"
              value={character.gender}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Paper>
        </Grid>
        <Grid item xs={1.85}>
          <Paper elevation={8}>
            <TextField
              fullWidth
              sx={{
                backgroundColor: "rgba(255,255,255,.95)",
                border: "groove 8px ",
              }}
              label="-Level-"
              id="outlined-start-adornment"
              value={character.level}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper elevation={8}>
            <TextField
              fullWidth
              sx={{
                backgroundColor: "rgba(255,255,255,.95)",
                border: "groove 8px ",
              }}
              label="-Exerience Points-"
              id="outlined-start-adornment"
              value={character.expPoints}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Paper>
        </Grid>

        <Grid item xs={3.5}>
          <Paper elevation={8}>
            <TextField
              fullWidth
              sx={{
                backgroundColor: "rgba(255,255,255,.95)",
                border: "groove 8px ",
              }}
              label="-Race- "
              id="outlined-start-adornment"
              value={character.race}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Paper>
        </Grid>

        <Grid item xs={3.5}>
          <Paper elevation={8}>
            <TextField
              fullWidth
              sx={{
                backgroundColor: "rgba(255,255,255,.95)",
                border: "groove 8px ",
              }}
              label="-Class- "
              id="outlined-start-adornment"
              value={character._class}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Paper>
        </Grid>
        <Grid item xs={3.5}>
          <Paper elevation={8}>
            <TextField
              fullWidth
              sx={{
                backgroundColor: "rgba(255,255,255,.95)",
                border: "groove 8px ",
              }}
              label="-Alignment- "
              id="outlined-start-adornment"
              value={character.alignment}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Paper>
        </Grid>
        <Grid item xs={1.35}>
          <Paper elevation={8}>
            <TextField
              fullWidth
              sx={{
                backgroundColor: "rgba(255,255,255,.95)",
                border: "groove 8px ",
              }}
              label="-Age- "
              id="outlined-start-adornment"
              value={character.age}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            elevation={8}
            sx={{
              backgroundColor: "rgba(255,255,255,.95)",
              border: "groove 6px ",
              margin: "0rem",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                margin: 0,
                width: "calc(100% - 16px)",
                paddingBottom: "24px",
              }}
            >
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  align-label="center"
                  label="Strength"
                  id="standard-start-adornment"
                  value={character?.strength}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="Str Bonus"
                  sx={{ textAlign: "center" }}
                  id="standard-start-adornment"
                  value={character?.strBonus}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="Lift/Bend"
                  id="standard-start-adornment"
                  value={character?.liftBend}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="Carry Weight"
                  id="standard-start-adornment"
                  value={character?.carryWeight}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Dexterity"
                  id="standard-start-adornment"
                  value={character?.dexterity}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Dex Bonus"
                  id="standard-start-adornment"
                  value={character?.dexBonus}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Dodge"
                  id="standard-start-adornment"
                  value={character?.dodge}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Speed"
                  id="standard-start-adornment"
                  value={character?.speed}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Constitution"
                  id="standard-start-adornment"
                  value={character?.constitution}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Con Bonus"
                  id="standard-start-adornment"
                  value={character?.conBonus}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Hit Dice"
                  id="standard-start-adornment"
                  value={character?.hitDice}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Saving Throw"
                  id="standard-start-adornment"
                  value={character?.saveThrow}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Intelligence"
                  id="standard-start-adornment"
                  fullWidth
                  value={character?.intelligence}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Int Bonus"
                  id="standard-start-adornment"
                  fullWidth
                  value={character?.intBonus}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Investigation"
                  id="standard-start-adornment"
                  fullWidth
                  value={character?.investigation}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Skill Bonus"
                  id="standard-start-adornment"
                  fullWidth
                  value={character?.skillBonus}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Wisdom"
                  id="standard-start-adornment"
                  fullWidth
                  value={character?.wisdom}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Wis Bonus"
                  id="standard-start-adornment"
                  fullWidth
                  value={character?.wisBonus}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Perception"
                  id="standard-start-adornment"
                  fullWidth
                  value={character?.perception}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Insight"
                  id="standard-start-adornment"
                  fullWidth
                  value={character?.insight}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Charisma"
                  id="standard-start-adornment"
                  fullWidth
                  value={character?.charisma}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Cha Bonus"
                  id="standard-start-adornment"
                  fullWidth
                  value={character?.chaBonus}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Charm"
                  id="standard-start-adornment"
                  fullWidth
                  value={character?.charm}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Intimidate"
                  id="standard-start-adornment"
                  fullWidth
                  value={character?.intimidate}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper
            elevation={8}
            sx={{
              backgroundColor: "rgba(255,255,255,.95)",
              border: "groove 6px ",
              paddingLeft: "0px",
              marginTop: "0px",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                margin: 0,
                width: "calc(100% - 20px)",
                paddingBottom: "16px",

                marginRight: "2rem",
              }}
            >
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="Height"
                  id="outlined-start-adornment"
                  value={character?.charHeight}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="Weight"
                  id="outlined-start-adornment"
                  value={character?.charWeight}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Eye Color"
                  id="outlined-start-adornment"
                  value={character?.eyeColor}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Hair Color"
                  id="outlined-start-adornment"
                  value={character?.hairColor}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  label="Total HP"
                  id="outlined-start-adornment"
                  value={character?.hitPoints}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Initiative +"
                  id="outlined-start-adornment"
                  value={character?.initiative}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="AC"
                  id="outlined-start-adornment"
                  value={character?.armorClass}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="THAC0"
                  id="outlined-start-adornment"
                  value={character?.thaco}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Paper>

          <Grid item xs={6} sx={{ paddingTop: "1rem" }} maxWidth={"md"}>
            <Paper
              elevation={8}
              sx={{
                backgroundColor: "rgba(255,255,255,.95)",
                border: "groove 6px ",
              }}
            >
              <TextField
                fullWidth
                sx={{ marginTop: "6px", marginBottom: "4px" }}
                label="-SKILLS- "
                id="standard-start-adornment"
                value={character?.randSkill}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <TextField
                fullWidth
                id="standard-start-adornment"
                value={character?.randSkill}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <TextField
                fullWidth
                id="standard-start-adornment"
                value={character?.randSkill}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <TextField
                fullWidth
                id="standard-start-adornment"
                value={character?.randSkill}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <TextField
                fullWidth
                id="standard-start-adornment"
                value={character?.randSkill}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <TextField
                fullWidth
                id="standard-start-adornment"
                value={character?.randSkill}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="standard"
              />
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={1} marginTop="4px">
          <Grid item xs={2.85} marginLeft="14px">
            <Paper elevation={8}>
              <TextField
                fullWidth
                sx={{
                  backgroundColor: "rgba(255,255,255,.95)",
                  // border: "double",
                  border: "groove 3px ",
                }}
                label=" - Main Weapon - "
                id="outlined-start-adornment"
                value={character?.mainWeapon}
                //disabled
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="standard"
              />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={8}>
              <TextField
                fullWidth
                sx={{
                  backgroundColor: "rgba(255,255,255,.95)",
                  border: "groove 3px ",
                }}
                label="-Special-"
                id="outlined-start-adornment"
                value={character?.specialWeapon}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="standard"
              />
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper elevation={8}>
              <TextField
                fullWidth
                sx={{
                  backgroundColor: "rgba(255,255,255,.95)",
                  border: "groove 3px ",
                }}
                label="-Bonus-"
                id="outlined-start-adornment"
                value={character?.weapBonus}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="standard"
              />
            </Paper>
          </Grid>
          <Grid item xs={2.85}>
            <Paper elevation={8}>
              <TextField
                fullWidth
                sx={{
                  backgroundColor: "rgba(255,255,255,.95)",
                  border: "groove 3px ",
                }}
                label="- Damage -"
                id="outlined-start-adornment"
                value={"1-8"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="standard"
              />
            </Paper>
          </Grid>
          <Grid item xs={2.85} marginLeft="14px">
            <Paper elevation={8}>
              <TextField
                fullWidth
                sx={{
                  marginTop: "-4px",
                  backgroundColor: "rgba(255,255,255,.95)",
                  // border: "double",
                  border: "groove 3px ",
                }}
                label=" - Off-Hand Weapon - "
                id="outlined-start-adornment"
                value={character?.offWeapon}
                //disabled
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="standard"
              />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={8}>
              <TextField
                fullWidth
                sx={{
                  marginTop: "-4px",
                  backgroundColor: "rgba(255,255,255,.95)",
                  border: "groove 3px ",
                }}
                label="-Special-"
                id="outlined-start-adornment"
                value={character?.specialWeapon}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="standard"
              />
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper elevation={8}>
              <TextField
                fullWidth
                sx={{
                  marginTop: "-4px",
                  backgroundColor: "rgba(255,255,255,.95)",
                  border: "groove 3px ",
                }}
                label="-Bonus-"
                id="outlined-start-adornment"
                value={character?.weapBonus}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="standard"
              />
            </Paper>
          </Grid>
          <Grid item xs={2.85}>
            <Paper elevation={8}>
              <TextField
                fullWidth
                sx={{
                  marginTop: "-4px",
                  backgroundColor: "rgba(255,255,255,.95)",
                  border: "groove 3px ",
                }}
                label="- Damage -"
                id="outlined-start-adornment"
                value={"1-8"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="standard"
              />
            </Paper>
          </Grid>

          <Grid
            item
            xs={11.85}
            sx={{ marginTop: "4px", paddingTop: "2rem", marginLeft: "14px" }}
            maxWidth={"md"}
          >
            <Paper
              elevation={8}
              sx={{
                backgroundColor: "rgba(255,255,255,.95)",
                border: "groove 8px ",
              }}
            >
              <TextField
                fullWidth
                sx={{ marginTop: "10px", marginBottom: "4px" }}
                label="-Equipment- "
                id="standard-start-adornment"
                //value={character?.randSkill}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <TextField
                fullWidth
                id="standard-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <TextField
                fullWidth
                id="standard-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <TextField
                fullWidth
                id="standard-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <TextField
                fullWidth
                id="standard-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <TextField
                fullWidth
                id="standard-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <TextField
                fullWidth
                id="standard-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
                variant="standard"
              />
            </Paper>
          </Grid>
        </Grid>
        {/* <Grid
          item
          xs={6}
          sx={{ paddingTop: "1rem", paddingBottom: "4rem" }}
          maxWidth={"md"}
        >
          <Paper
            elevation={8}
            sx={{
              backgroundColor: "rgba(255,255,255,.95)",
              border: "groove 8px ",
              paddingBottom: "2.6rem",
            }}
          >
            <TextField
              fullWidth
              sx={{ marginTop: "6px" }}
              label="-SPELLS- "
              id="standard-start-adornment"
              value={character?.randSpell}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="standard"
            />
            <TextField
              fullWidth
              id="standard-start-adornment"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="standard"
            />
            <TextField
              fullWidth
              id="standard-start-adornment"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="standard"
            />
            <TextField
              fullWidth
              id="standard-start-adornment"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="standard"
            />
            <TextField
              fullWidth
              id="standard-start-adornment"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="standard"
            />
            <TextField
              fullWidth
              id="standard-start-adornment"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="standard"
            />
            <TextField
              fullWidth
              id="standard-start-adornment"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="standard"
            />
            <TextField
              fullWidth
              id="standard-start-adornment"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="standard"
            />
            <TextField
              fullWidth
              id="standard-start-adornment"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="standard"
            /> */}
        {/* </Paper>
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default NewChar;
