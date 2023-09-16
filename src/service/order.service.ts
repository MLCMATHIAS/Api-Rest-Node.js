import itemProduts from "../models/ModulsProducts"

const getOrders = async () => {
    const responseItem = await itemProduts.find({});
    return responseItem;
}

export {getOrders};