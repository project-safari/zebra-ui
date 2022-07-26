import {
    service as inventoryService
}

const getInventory = (params: DefaultApiInventoryGetRequest) => inventoryService.DefaultApiEnrollInventoryRequest(params)
    .then(r => r.data)
    .catch(e => e);

export default {getInventory}