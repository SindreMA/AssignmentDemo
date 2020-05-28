import { IFixture } from "../Models/IFixture";

export default {
    getLocations (fixtures : IFixture[]) {
        var locations = []
        for (let i = 0; i < fixtures.length; i++) {
          const fix = fixtures[i];

          const load = this.capitalize(fix.loadDescr)
          const disch = this.capitalize(fix.dischDescr)

          if (!locations.includes(load))locations.push(load)
          if (!locations.includes(disch))locations.push(disch)
        }
        return locations
      },
      capitalize (s: string) {
        if (s) {
          return s.charAt(0).toUpperCase() + s.toLowerCase().slice(1)  
        } else return ''
        
      }

}