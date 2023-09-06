import React, { useState } from "react";
import questions from "../components/questions";
import {
  FormGroup,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
} from "@mui/material";

const FeedBackForm = () => {
  const [loading, setLoading] = useState(false);

  return (
    <FormGroup>
      <h2 style={{ textAlign: "center" }}>Feedback Form</h2>
      <div>
        {questions.map((ques, index) => {
          return (
            <>
              <div className='ques-div' key={index}>
                <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                  {index + 1}
                  {". "}
                  {ques.ques}
                </p>
                {ques.type === "radio" ? (
                  <>
                    <FormControl>
                      <FormLabel id='demo-row-radio-buttons-group-label'>
                        Answer
                      </FormLabel>
                      <RadioGroup
                        required
                        row
                        aria-labelledby='demo-row-radio-buttons-group-label'
                        name='row-radio-buttons-group'
                        defaultValue={ques.enum[parseInt(ques.enum.length / 2)]}
                      >
                        {ques.enum.map((opt, i) => (
                          <FormControlLabel
                            key={i}
                            value={opt}
                            control={<Radio />}
                            label={opt}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </>
                ) : (
                  <TextField
                    fullWidth
                    required
                    variant='outlined'
                    type={ques.type}
                    placeholder='Answer'
                    label='Required'
                    onChange={(e) => console.log(e.target.value)}
                  />
                )}
              </div>
            </>
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          style={{
            backgroundColor: "black",
            color: "#fff",
            fontWeight: "bold",
          }}
          variant='contained'
          type='submit'
        >
          <span style={{ fontSize: "1.1rem" }}>
            {loading ? "Loading..." : "Submit"}
          </span>
        </Button>
      </div>
    </FormGroup>
  );
};

export default FeedBackForm;
