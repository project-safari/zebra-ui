import React, {useState} from "react";
import InventoryDatagrid from "../Datagrid/InventoryDatagrid";
import Button from '@mui/material/Button';
import AddInventoryForm from '../Inventory/AddInventoryForm';

function InventoryHome(props){

    const [addInventory, setAddInventory] = useState(false);

    function addInventoryHandler() {
        setAddInventory(true);
    };

    function closeAddInventoryHandler() {
        setAddInventory(false);
    };

    return (
        <React.Fragment>
            <>
                <Button onClick={addInventoryHandler} variant='outlined'>
                    + Add Inventory Item
                </Button>
                <InventoryDatagrid/>
            </>
            {addInventory &&
            <AddInventoryForm show={addInventory} closeAddInventory={closeAddInventoryHandler}/>}
        </React.Fragment>
    )

};

export default InventoryHome;