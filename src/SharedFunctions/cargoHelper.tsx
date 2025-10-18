import { IFixture } from "../Models/IFixture";

export default {
    getLocations (fixtures : IFixture[]) {
        var locations = []
        for (let i = 0; i < fixtures.length; i++) {
          const fix = fixtures[i];
          
          if (!locations.includes(fix.loadDescr))locations.push(fix.loadDescr)
          if (!locations.includes(fix.dischDescr))locations.push(fix.dischDescr)
        }
        return locations
      }

}