import { useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  TextField,
  Container,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import { useState } from "react";

const fields = {
  marginTop: "20px",
  marginBottom: "20px",
  display: "block",
};

export default function Create() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    if (title === "") {
      setTitleError(true);
    }
    e.preventDefault();
    if (details === "") {
      setDetailsError(true);
    }
    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => navigate("/"));
    }
  };

  return (
    <ThemeProvider
      theme={(theme) =>
        createTheme({
          ...theme,
          palette: {
            ...theme.palette,
            primary: {
              ...theme.palette.primary,
              main: "#1976d2",
            },
          },
        })
      }
    >
      <Container>
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          color="textSecondary"
        >
          Create a New Note
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            sx={fields}
            label="Note Title"
            variant="outlined"
            fullWidth
            required
            error={titleError}
          />
          <TextField
            onChange={(e) => {
              setDetails(e.target.value);
            }}
            sx={fields}
            label="Note Details"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            required
            error={detailsError}
          />
          <FormControl sx={fields}>
            <FormLabel>Note Category</FormLabel>
            <RadioGroup
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <FormControlLabel
                control={<Radio />}
                value="todos"
                label="todos"
              />
              <FormControlLabel
                control={<Radio />}
                value="Money"
                label="Money"
              />
              <FormControlLabel
                control={<Radio />}
                value="reminders"
                label="reminders"
              />
              <FormControlLabel control={<Radio />} value="work" label="work" />
            </RadioGroup>
          </FormControl>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            endIcon={<KeyboardArrowRight />}
          >
            Submit
          </Button>
        </form>
        <br />
      </Container>
    </ThemeProvider>
  );
}
