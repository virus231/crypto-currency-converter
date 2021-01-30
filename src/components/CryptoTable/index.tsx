import React from "react";
import { observer, inject } from 'mobx-react'
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import { TCoin } from "../../types";
import CurrenciesStore from "../../stores/currenciesStore";

type ICryptoTable = {
    classes: any; 
    currenciesStore?: CurrenciesStore
};

const CryptoTable = inject("currenciesStore")( observer(({ classes, currenciesStore }: ICryptoTable) => {
            const items: TCoin[] = currenciesStore!.getItems;


            React.useEffect(() => {                
                if(currenciesStore) {
                    currenciesStore.fetchCoins()
                }

            }, [])

            return (
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">FullName</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="left">volume24Hour</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {!items.length
                                ? "Загрузка"
                                : items.map((coin) => (
                                    <TableRow key={coin.name}>
                                        <TableCell align="left">
                                            <img
                                                className={classes.currencyImg}
                                                src={coin.imgUrl}
                                                alt="Coin icon"
                                            />
                                        </TableCell>
                                        <TableCell align="left">{coin.name}</TableCell>
                                        <TableCell align="left">{coin.fullName}</TableCell>
                                        <TableCell align="left">${coin.price}</TableCell>
                                        <TableCell align="left">${coin.volume24Hour}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            );
        }));

export default CryptoTable;
