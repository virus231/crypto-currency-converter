import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import React from "react";

type IConverterBlock = {
    classes: any;
}

export default function ConverterBlock({classes}: IConverterBlock) {
    return (
        <Paper className={classes.paper}>
            <div className={classes.crypto}>
                <FormControl className={classes.currencyType}>
                    <TextField label="Сумма" />
                </FormControl>
                <FormControl className={classes.currencyInput}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                        Валюта
                    </InputLabel>
                    <Select

                        value={10}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div className={classes.crypto}>
                <FormControl className={classes.currencyType}>
                    <TextField label="Сумма" />
                </FormControl>
                <FormControl className={classes.currencyInput}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                        Валюта
                    </InputLabel>
                    <Select

                        value={10}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <Typography variant="h5" component="h5">
                h1. Heading
            </Typography>
        </Paper>
    )
};
