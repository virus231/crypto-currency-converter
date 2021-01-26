import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(10)
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        crypto: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginBottom: 20
        },
        currencyType: {
            minWidth: 'calc(80%-10px)',
        },
        currencyInput: {
            minWidth: '20%',
        },
        table: {
            minWidth: 650,
        },
        currencyImg: {
            width: 24,
            height: 22,
            borderRadius: 10
        }
    }),
);
