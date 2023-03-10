 
 export interface MovieContract {
    id:number ;
    url: string;
    name: string;
    type: string;
    langauge: String;
    genres: any;
    status: string;
    runtime: number;
    averageRuntime: number;
    premiered: string;
    ended: string;
    officialSite: string;
    schedule: { time: string, days: [string] };
    rating: { average: number };
    weight: number;
    network: { id: number, name: string, country: { name: string, code: string, timezone: string }, officialSite: string },
    webChannel: string | null,
    dvdCountry: string | null;
    externals: { tvrage: number, thetvdb: number, imdb: string },
    image: { medium: string, original: string },
    summary: string;
    update: number;
    _links: { self: { href: string }, previousepisode: { href: string } }
}