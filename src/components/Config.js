/* eslint-disable prettier/prettier */
const baseurl = 'https://bkedtest.logistiex.com/';
//Dynamic allocation of backend data to access at any required page

export const loginUrl = `${baseurl}Login/login`;
export const getPickup = `${baseurl}/getCP/Tarun123`;
export const postScan = `${baseurl}barcode/scan`;
export const getSellers = `${baseurl}sellers/getSellers`;
export const getShipments = `${baseurl}shipments/getShipments`;
export const getValidate = `${baseurl}barcode/validate`;
export const getFilter = `${baseurl}shipments/getShipmentsWithType?type=`;
export const getGraph = `${baseurl}barcode/scan?relation=11235&type=`;
