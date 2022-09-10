export interface ILocalization{
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}
export interface IRepositories{
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
}