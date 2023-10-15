import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MDFTableCell from "@/components/SpecsTable/MDFTableCell";
import {Car} from "@/types/car.type";

function createData(key: string, value: any) {
    return {key, value};
}



const SpecsTable = ({data}:{data:Car}) => {

    const rows = [
        createData('Drivetype', data[`driveType`] === 'info_not_found'? '-': data[`driveType`]),
        createData('Weight', data[`weightLbs`] === 'info_not_found'? '-': data[`weightLbs`]),
        createData('HorsePower', data[`horsePower`] === 'info_not_found'? '-': data[`horsePower`]),
        createData('GForce', data[`gForce`] === 'info_not_found'? '-': data[`gForce`]),
        createData('Speed', data[`speed`] === 'info_not_found'? '-': data[`speed`]),
        createData('Handling', data[`handling`] === 'info_not_found'? '-': data[`handling`]),
        createData('Acceleration', data[`acceleration`] === 'info_not_found'? '-': data[`acceleration`]),
        createData('Launch', data[`launch`] === 'info_not_found'? '-': data[`launch`]),
        createData('Braking', data[`braking`] === 'info_not_found'? '-': data[`braking`]),
        createData('Offroad', data[`offroad`] ===  'info_not_found'? '-': data[`offroad`]),
        createData('topSpeed', data[`topSpeed`] === 'info_not_found'? '-': data[`topSpeed`]),
        createData('0-60MPH', data['0-60Mph'] === 'info_not_found'? '-': data['0-60Mph']),
        createData('0-100MPH', data['0-100Mph'] === 'info_not_found'? '-': data['0-100Mph']),
    ];


    return (
        <TableContainer>
            <Table aria-label="specs-table">
                <TableHead>
                    <TableRow>
                        <MDFTableCell sx={{
                            fontSize: '1.5rem',
                        }}>Specifications</MDFTableCell>
                    </TableRow>

                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.key}
                        >
                            <MDFTableCell>
                                {row.key}
                            </MDFTableCell>
                            <MDFTableCell align={"left"}>{row.value}</MDFTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default SpecsTable;