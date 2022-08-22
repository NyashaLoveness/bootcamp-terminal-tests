export default function regCheck(plate, location) {  
    return plate.endsWith(location);
    }
    console.log(regCheck("DC 55 YU GP", "GP"));
    console.log(regCheck("DC 55 YU GP", "EC"));
    console.log(regCheck("5566 L", "L"));