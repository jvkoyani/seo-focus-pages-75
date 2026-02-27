
import { getServicePaths, getIndustryPaths, getLocationPaths, getLocationServicePaths, getCatchAllPaths } from './src/lib/route-utils';

async function testRoutes() {
    console.log("Testing Service Paths...");
    try {
        const services = getServicePaths();
        console.log(`Success: Found ${services.length} services.`);
    } catch (e) {
        console.error("Error in getServicePaths:", e);
    }

    console.log("\nTesting Industry Paths...");
    try {
        const industries = getIndustryPaths();
        console.log(`Success: Found ${industries.length} industries.`);
    } catch (e) {
        console.error("Error in getIndustryPaths:", e);
    }

    console.log("\nTesting Location Paths...");
    try {
        const locations = getLocationPaths();
        console.log(`Success: Found ${locations.length} locations.`);
    } catch (e) {
        console.error("Error in getLocationPaths:", e);
    }

    console.log("\nTesting Location Service Paths...");
    try {
        const locServices = getLocationServicePaths();
        console.log(`Success: Found ${locServices.length} location+service combinations.`);
    } catch (e) {
        console.error("Error in getLocationServicePaths:", e);
    }

    console.log("\nTesting Catch-All Paths...");
    try {
        const catchAll = getCatchAllPaths();
        console.log(`Success: Found ${catchAll.length} catch-all paths.`);
    } catch (e) {
        console.error("Error in getCatchAllPaths:", e);
    }
}

testRoutes();
